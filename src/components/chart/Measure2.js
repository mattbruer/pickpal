import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { renderLines } from '../../helperFunctions/renderLines';
import { renderTimeSig } from '../../helperFunctions/renderTimeSig';
import "./Measure2.css";
import TimeSig from './TimeSig';


const Measure2 = () => {

    const renderStaffLines = (spaceBetweenLines = 15) => {
        let lines = []
        for (let i = 0; i < 5; i++) {
            lines.push(<line x1="0" y1={`${i * spaceBetweenLines+15}%`} x2="100%" y2={`${i * spaceBetweenLines + 15}%`} stroke="black" />)
        }
        return lines;
    }
 
    return (
        <div className="measure-container">
            {/* <div className="time">
                <div className="chords">
                    
                </div>
                <div className="timeSig">
                    
                    <svg width="100%" height="10vw">
                        {renderStaffLines()}
                        <text style={{fontSize:"4vw"}}x={"-6%"} y={"45%"}>2</text>
                        <text style={{fontSize:"4vw"}}x={"-6%"} y={"75%"}>2</text>
                    </svg>
                
                </div>
                <div className="measNum"></div>
            </div> */}
            <div className="staffs">
                <div className="chords">
                <input/>
                </div>
                <div className="staff">
                  <div className='sixteenth'>
                  
                    <svg width="100%" height="10vw">
                    <text textAnchor="middle" style={{fontSize:"1.5vw"}}x={"50%"} y={"20%"}>7</text>
                        {renderStaffLines()}
                        <line x1="50%" y1="25%" x2="50%" y2="100%" stroke="black"/>
                        <line x1="50%" y1="100%" x2="100%" y2="100%" stroke="black"/>
                        <line x1="50%" y1="95%" x2="100%" y2="95%" stroke="black"/>
                    </svg>
                  </div>
                  <div id="m" onClick={()=>console.log(document.getElementById("m").clientWidth)}className='sixteenth'>
                  
                  <svg width="100%" height="10vw">
                  <text textAnchor="middle" style={{fontSize:"1.5vw"}}x={"50%"} y={"20%"}>3</text>
                        {renderStaffLines()}
                        <line x1="50%" y1="25%" x2="50%" y2="100%" stroke="black"/>
                        <line x1="0%" y1="100%" x2="100%" y2="100%" stroke="black"/>
                        <line x1="0%" y1="95%" x2="100%" y2="95%" stroke="black"/>
                  </svg>
                </div>
                <div className='sixteenth'>
                  
                  <svg width="100%" height="10vw">
                  <text textAnchor="middle" style={{fontSize:"1.5vw"}}x={"50%"} y={"20%"}>12</text>
                        {renderStaffLines()}
                        <line x1="50%" y1="25%" x2="50%" y2="100%" stroke="black"/>
                        <line x1="0%" y1="100%" x2="100%" y2="100%" stroke="black"/>
                        <line x1="0%" y1="95%" x2="100%" y2="95%" stroke="black"/>

                  </svg>
                </div>
                <div className='sixteenth'>
                
                <svg width="100%" height="10vw">
                <text textAnchor="middle" style={{fontSize:"1.5vw"}}x={"50%"} y={"20%"}>12</text>
                        {renderStaffLines()}
                        <line x1="50%" y1="25%" x2="50%" y2="100%" stroke="black"/>
                        <line x1="0%" y1="100%" x2="50%" y2="100%" stroke="black"/>
                        <line x1="0%" y1="95%" x2="50%" y2="95%" stroke="black"/>
                </svg>
              </div>
              <div className='sixteenth'>
                  
                  <svg width="100%" height="10vw">
                  <text textAnchor="middle" style={{fontSize:"1.5vw"}}x={"50%"} y={"20%"}>12</text>
                        {renderStaffLines()}
                        <line x1="50%" y1="25%" x2="50%" y2="100%" stroke="black"/>
                       
                        
                  </svg>
                </div>
                <div className='sixteenth'>
                
                <svg width="100%" height="10vw">
                <text style={{fontSize:"1.5vw"}}x={0} y={"20%"}>12</text>
                    {renderStaffLines()}
                </svg>
              </div>
              <div className='sixteenth'>
                  
                  <svg width="100%" height="10vw">
                  <text style={{fontSize:"1.5vw"}}x={0} y={"20%"}>12</text>
                      {renderStaffLines()}
                  </svg>
                </div>
                <div className='sixteenth'>
                
                <svg width="100%" height="10vw">
                <text style={{fontSize:"1.5vw"}}x={0} y={"20%"}>12</text>
                    {renderStaffLines()}
                </svg>
              </div>
              <div className='sixteenth'>
                  
                  <svg width="100%" height="10vw">
                  <text style={{fontSize:"1.5vw"}}x={0} y={"20%"}>12</text>
                      {renderStaffLines()}
                  </svg>
                </div>
                <div className='sixteenth'>
                
                <svg width="100%" height="10vw">
                <text style={{fontSize:"1.5vw"}}x={0} y={"20%"}>12</text>
                    {renderStaffLines()}
                </svg>
              </div>
              <div className='sixteenth'>
                
                <svg width="100%" height="10vw">
                <text style={{fontSize:"1.5vw"}}x={0} y={"20%"}>12</text>
                    {renderStaffLines()}
                </svg>
              </div>
              <div className='sixteenth'>
              
              <svg width="100%" height="10vw">
              <text style={{fontSize:"1.5vw"}}x={0} y={"20%"}>3</text>
                  {renderStaffLines()}
              </svg>
            </div>
            <div className='eighth'>
                
                <svg width="100%" height="10vw">
                <text style={{fontSize:"1.5vw"}}x={0} y={"20%"}>3</text>
                    {renderStaffLines()}
                </svg>
              </div>
              <div className='eighth'>
              
              <svg width="100%" height="10vw">
              <text style={{fontSize:"1.5vw"}}x={0} y={"20%"}>3</text>
                  {renderStaffLines()}
              </svg>
            </div>
            <div className='eighth'>
                
                <svg width="100%" height="10vw">
                <text style={{fontSize:"1.5vw"}}x={0} y={"20%"}>2</text>
                    {renderStaffLines()}
                </svg>
              </div>
              <div className='eighth'>
              
              <svg width="100%" height="10vw">
              <text style={{fontSize:"1.5vw"}}x={0} y={"20%"}>2</text>
                  {renderStaffLines()}
              </svg>
            </div>
                  
             
                
                </div>
                <div className="measNum">#</div>
            </div>
            
        </div>
    )
}

export default Measure2
