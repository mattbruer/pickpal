import React,{useState, useEffect} from 'react';
import Line from './Line';


import { useSelector } from 'react-redux';
import { renderLines } from '../../helperFunctions/renderLines';

const Song = ({part}) => {
  const [numbersPerLine, setNumbersPerLine]=useState(4)
  const { song } = useSelector(state => state.chart)
  const lines = renderLines(numbersPerLine,part);

  window.onresize=()=>{
  document.getElementsByClassName('chart')[0].clientWidth<=750?setNumbersPerLine(2):setNumbersPerLine(4);
  }

 useEffect(()=>{
  
 },[])

  return (
    <div

      style={{

        
        height: '1500px',
        width: '100%',
        
        marginBottom: '100px',
        backgroundColor: 'white',
      }}
    >
 
      {lines.map((l, i) => (
        <Line part={part} measures={renderLines(numbersPerLine)[i]} lineNumber={i} />
      ))}
    </div>
  );
};

export default Song;
