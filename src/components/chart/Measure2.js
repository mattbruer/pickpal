import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { renderLines } from '../../helperFunctions/renderLines';
import "./Measure2.css";


const Measure2 = () => {

    const renderStaffLines = (spaceBetweenLines = 25) => {
        let lines = []
        for (let i = 0; i < 5; i++) {
            lines.push(<line x1="0" y1={`${i * spaceBetweenLines}%`} x2="100%" y2={`${i * spaceBetweenLines}%`} stroke="black" />)
        }
        return lines;
    }
 
    return (
        <div className="measure-container">
            <div className="time">
                <div className="chords"></div>
                <div className="timeSig">
                    <svg width="100%" height="10vw">
                        {renderStaffLines()}
                    </svg>
                </div>
                <div className="measNum">#</div>
            </div>
            <div className="staffs">
                <div className="chords"></div>
                <div className="staff"></div>
                <div className="measNum">#</div>
            </div>
        </div>
    )
}

export default Measure2
