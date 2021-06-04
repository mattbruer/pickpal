import React from 'react';
import Line from './Line';


import { useSelector } from 'react-redux';
import { renderLines } from '../../helperFunctions/renderLines';

const Song = () => {
  const { measureModal } = useSelector((state) => state.chart);
  const lines = renderLines();
  return (
    <div

      style={{

        border: '1px solid black',
        height: '1500px',
        width: '90vw',
        padding: '15px',
        marginBottom: '100px',
        backgroundColor: 'white',
      }}
    >

      {lines.map((l, i) => (
        <Line measures={lines[i]} lineNumber={i} />
      ))}
    </div>
  );
};

export default Song;
