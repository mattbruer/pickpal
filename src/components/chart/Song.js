import React from 'react';
import Line from './Line';

const Song = () => {
  return (
    <div
      style={{
        border: '1px solid black',
        height: '1500px',
        width: '90vw',

        marginBottom: '100px',
        backgroundColor: 'white',
      }}
    >
      song
      <Line />
    </div>
  );
};

export default Song;
