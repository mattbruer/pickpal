import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './Measure.css';
import Staff from './Staff'
import ChordInput from './ChordInput'

import { showMeasureModal } from '../../store/actions/chartActions'

const Measure = ({ measureNumber }) => {
  const { editingMeasure, measureModal } = useSelector(state => state.chart)
  const dispatch = useDispatch();
  return (

    <div onClick={() => {
      if (!measureModal) dispatch(showMeasureModal(true, measureNumber))
    }
    } className="measure">

      <div className="chord-container">
        <div className="input1">
          <ChordInput measureNumber={editingMeasure || measureNumber} position={0} />
        </div>
        <div className="input2">
          <ChordInput measureNumber={editingMeasure || measureNumber} position={1} />
        </div>
      </div>
      <Staff measureNumber={measureNumber} />

    </div>

  );
};

export default Measure;
