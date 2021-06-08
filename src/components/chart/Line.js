import React from 'react';
import Measure from './Measure';
import { useSelector } from 'react-redux';
import './Line.css';
import TimeSig from './TimeSig';
import Measure2 from './Measure2'

const Line = ({ measures, lineNumber }) => {


  return (
    <div className="line">
      {measures.map((m, index) => (
        <>
        <Measure2/>
        {/* <TimeSig/>
        <Measure measureNumber={index + lineNumber * 4} />  */}
        </>
      ))}
    </div>
  );
};

export default Line;
