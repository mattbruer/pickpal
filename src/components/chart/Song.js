import React,{useState, useEffect} from 'react';
import Line from './Line';


import { useSelector } from 'react-redux';
import { renderLines } from '../../helperFunctions/renderLines';

const Song = () => {
  const [numbersPerLine, setNumbersPerLine]=useState(4)
  const { song } = useSelector(state => state.chart)
  const lines = renderLines(numbersPerLine);

  window.onresize=()=>{
  document.getElementsByClassName('chart')[0].clientWidth<=750?setNumbersPerLine(2):setNumbersPerLine(4);
  }

 useEffect(()=>{
  
 },[])

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
        <Line measures={renderLines(numbersPerLine)[i]} lineNumber={i} />
      ))}
    </div>
  );
};

export default Song;
