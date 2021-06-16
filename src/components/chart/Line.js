import React from 'react';
import Measure from './Measure';
import { useSelector } from 'react-redux';
import './Line.css';
import TimeSig from './TimeSig';
import Measure2 from './Measure2'

const Line = ({ measures, lineNumber, part }) => {


  return (
    <div className="line">
      {measures.map((m, index) => (
        <>
        
        <Measure2 part={part}/>
        {/* <TimeSig/>
        <Measure measureNumber={index + lineNumber * 4} />  */}
        </>
      ))}
      
    </div>
  );
};

export default Line;
