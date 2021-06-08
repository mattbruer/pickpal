import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './Measure.css';
import Staff from './Staff'
import ChordInput from './ChordInput'

import { showMeasureModal } from '../../store/actions/chartActions'

const Measure = ({ measureNumber, width, timeSigSize }) => {
  const { measureModal, editMode } = useSelector(state => state.chart)
  const dispatch = useDispatch();
  return (

    <div onClick={() => {
      if (editMode && !measureModal) dispatch(showMeasureModal(true, measureNumber))
    }
    } style={{
      
      width: `${width}%`

    }} className="measure" >

      <div className="chord-container">
        <div className="input1">
          <ChordInput measureNumber={measureNumber} position={0} />
        </div>
        <div className="input2">
          <ChordInput measureNumber={measureNumber} position={1} />
        </div>
      </div>
      <Staff timeSigSize={timeSigSize || 3} measureNumber={measureNumber} />

    </div >

  );
};

export default Measure;
