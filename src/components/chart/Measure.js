import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editChords } from '../../store/actions/chartActions';
import './Measure.css';

const Measure = ({ measureNumber }) => {
  const dispatch = useDispatch();
  const { editMode, song } = useSelector((state) => state.chart);

  return (
    <div className="measure">
      <div className="chord-container">
        <div className="input1">
          <input
            onChange={(e) => {
              dispatch(editChords(measureNumber, 0, e.target.value));
            }}
            value={song[measureNumber][0]}
            className="chord-input"
            disabled={!editMode}
            style={editMode ? { border: '1px solid lightblue' } : null}
          />
        </div>
        <div className="input2">
          <input
            onChange={(e) =>
              dispatch(editChords(measureNumber, 1, e.target.value))
            }
            value={song[measureNumber][1]}
            className="chord-input"
            disabled={!editMode}
            style={editMode ? { border: '1px solid lightblue' } : null}
          />
        </div>
      </div>
      <div id="staff" className="staff">
        <svg width="100%" height="50%">
          {measureNumber === 0 && (
            <>
              <text style={{ fontSize: '3vw' }} x=".1%" y="45%">
                2
              </text>

              <text style={{ fontSize: '3vw' }} x=".1%" y="90%">
                2
              </text>
            </>
          )}
          <line x1="0" y1="0" x2="100%" y2="0" stroke="black" />
          <line x1="0" y1="25%" x2="100%" y2="25%" stroke="black" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="black" />
          <line x1="0" y1="75%" x2="100%" y2="75%" stroke="black" />
          <line x1="0" y1="100%" x2="100%" y2="100%" stroke="black" />
          <line x1="0" y1="0" x2="0" y2="100%" stroke="black" />
          <line x1="100%" y1="0%" x2="100%" y2="100%" stroke="black" />
        </svg>
        <p className="measure-number">{measureNumber + 1}</p>
      </div>
    </div>
  );
};

export default Measure;
