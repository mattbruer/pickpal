import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <p>Land here</p>
      <p>how to use pickpal</p>
      <p>your songs:</p>
      <div
        style={{
          border: '1px solid black',
          height: '100px',
          width: '100px',
          margin: '15px',
        }}
      >
        <p>You have no songs. Start one? </p>
      </div>
      <button>
        <Link to="/chart">start new song</Link>
      </button>
    </div>
  );
};

export default Landing;
