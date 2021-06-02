import React from 'react';
import { useSelector } from 'react-redux'
import { renderBarlines } from '../../helperFunctions/renderBarlines';
import { renderTimeSig } from '../../helperFunctions/renderTimeSig';

const Staff = ({ measureNumber }) => {
    const { timeSig, showTimeSig, leftBarline, rightBarline } = useSelector(state => state.chart.song[measureNumber])

    const barlines = renderBarlines(leftBarline, rightBarline);
    const timeSignature = renderTimeSig(leftBarline, timeSig);

    const renderStaffLines = (spaceBetweenLines = 25) => {
        let lines = []
        for (let i = 0; i < 5; i++) {
            lines.push(<line x1="0" y1={`${i * spaceBetweenLines}%`} x2="100%" y2={`${i * spaceBetweenLines}%`} stroke="black" />)
        }
        return lines;
    }
    return (
        <div onClick={() => alert(timeSig)} style={{ height: "100%" }}>

            <svg width="100%" height="50%">
                {showTimeSig && timeSignature}
                {renderStaffLines()}
                {barlines.left}
                {barlines.right}
            </svg>
            <p style={{
                fontSize: "1.5vw",
                marginLeft: "10px"
            }}>{measureNumber + 1}</p>
        </div>
    )
}

export default Staff