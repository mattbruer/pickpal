import React from 'react';
import Measure from './Measure';
import { useSelector } from 'react-redux';
import './Line.css';

const Line = () => {
  const { song } = useSelector((state) => state.chart);

  return (
    <div className="line">
      {song.map((m, index) => (
        <Measure measureNumber={index} />
      ))}
    </div>
  );
};

export default Line;
