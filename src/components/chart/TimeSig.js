import React from 'react';
import ChordInput from '../chart/ChordInput'

const renderStaffLines = (spaceBetweenLines = 25) => {
    let lines = []
    for (let i = 0; i < 5; i++) {
        lines.push(<line x1="0" y1={`${i * spaceBetweenLines}%`} x2="100%" y2={`${i * spaceBetweenLines}%`} stroke="black" />)
    }
    return lines;
}

const TimeSig = () => {
    return (
        <div style={{height: "100%", width:"50px", border:"1px solid red"}}>
              
              <div className="chord-container">
        <div className="input1">
          <div style={{height:"100%"}}></div>
        </div>
        <div className="input2">
          <div style={{height:"100%"}}></div>
        </div>
      </div>
             <svg width="100%" height="50%">
                {renderStaffLines()}
            </svg>
        </div>
    )
}

export default TimeSig
