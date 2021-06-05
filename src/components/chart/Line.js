import React from 'react';
import Measure from './Measure';
import { useSelector } from 'react-redux';
import './Line.css';

const Line = ({ measures, lineNumber }) => {


  return (
    <div className="line">
      {measures.map((m, index) => (
        <Measure measureNumber={index + lineNumber * 4} />
      ))}
    </div>
  );
};

export default Line;
