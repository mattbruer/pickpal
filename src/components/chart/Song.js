import React from 'react';
import Line from './Line';

const Song = () => {
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
      <Line />
      <Line />
      <Line />
    </div>
  );
};

export default Song;
