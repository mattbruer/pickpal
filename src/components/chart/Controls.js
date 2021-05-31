import React from 'react';
import { Slider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeTempo,
  toggleEditMode,
  togglePlayStop,
  addMeasure,
  deleteMeasure
} from '../../store/actions/chartActions';
import { Icon } from 'semantic-ui-react';
import './Controls.css';

const Controls = () => {
  const dispatch = useDispatch();
  const { tempo, editMode, isPlaying } = useSelector((state) => state.chart);

  return editMode ? (
    <div className="control-bar">
      <div className="btn-container">
        <button className="btn" onClick={() => dispatch(toggleEditMode())}>
          <Icon name="check" />
          Done
        </button>
      </div>
      <div className="btn-container">
        <button onClick={() => { dispatch(addMeasure()) }} className="btn">
          <Icon name="add" /> Add measure
        </button>
      </div>
      <div className="btn-container">
        <button onClick={() => { dispatch(deleteMeasure()) }} className="btn">
          <Icon name="minus" />
          Delete measure
        </button>
      </div>
    </div>
  ) : (
      <div className="control-bar">
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => dispatch(toggleEditMode())}
            disabled={isPlaying}
          >
            <Icon name="edit" />
            Edit
        </button>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => {
              dispatch(togglePlayStop());
            }}
          >
            <Icon name={isPlaying ? 'stop' : 'play'} />
            {isPlaying ? 'Stop' : 'Play'}
          </button>
        </div>
        <div className="slider">
          <p className="tempo-label">Tempo</p>
          <Slider
            step={1}
            value={tempo}
            onChange={(e, newValue) => {
              dispatch(changeTempo(newValue));
            }}
          />
        </div>
        <div className="tempo">
          <h1>{tempo}</h1>bpm
      </div>
      </div>
    );
};

export default Controls;

// <div className="control-bar">
// {editMode ? (
//   <div>
//     <button
//       className="btn"
//       onClick={() => {
//         dispatch(toggleEditMode());
//       }}
//     >
//       <Icon name="check" />
//       Done
//     </button>
// <button className="btn">
//   <Icon name="add" /> Add measure
// </button>
// <button className="btn">
//   <Icon name="minus" />
//   Delete measure
// </button>
//   </div>
// ) : (
//   <div className="edit-controls">
//     <div className="button-container">
//       <button
//         className="btn"
//         onClick={() => {
//           dispatch(toggleEditMode());
//         }}
//       >
// <Icon name="edit" />
//         Edit
//       </button>
//       <button
//         className="btn"
// onClick={() => {
//   dispatch(togglePlayStop());
// }}
//       >
//         <Icon name={isPlaying ? 'stop' : 'play'} />
//         {isPlaying ? 'Stop' : 'Play'}
//       </button>
//     </div>
//     <div className="slider-container">
//       <div className="tempo">
//         <h1>{tempo}</h1>
//         <p>bpm</p>
//       </div>
//       <div className="slider">
// <Slider
//   step={1}
//   value={tempo}
//   onChange={(e, newValue) => {
//     dispatch(changeTempo(newValue));
//   }}
// />
//       </div>
//     </div>
//   </div>
// )}
// </div>
