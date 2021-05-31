import React from 'react';
import './Measure.css';
import Staff from './Staff'
import ChordInput from './ChordInput'

const Measure = ({ measureNumber }) => {

  return (
    <div className="measure">
      <div className="chord-container">
        <div className="input1">
          <ChordInput measureNumber={measureNumber} position={0} />
        </div>
        <div className="input2">
          <ChordInput measureNumber={measureNumber} position={1} />
        </div>
      </div>
      <Staff measureNumber={measureNumber} />

    </div>
  );
};

export default Measure;
