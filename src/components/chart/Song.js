import React from 'react';
import Line from './Line';
import { useSelector } from 'react-redux';

const Song = () => {
  const { song } = useSelector((state) => state.chart);
  const lines = [];

  function renderLines(measuresPerLine = 4) {}
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
      <Line measures={[0, 3]} />
    </div>
  );
};

export default Song;
