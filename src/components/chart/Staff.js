import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { renderBarlines } from '../../helperFunctions/renderBarlines';
import { renderTimeSig } from '../../helperFunctions/renderTimeSig';

const Staff = ({ measureNumber, timeSigSize }) => {
    const { timeSig, showTimeSig, leftBarline, rightBarline } = useSelector(state => state.chart.song[measureNumber])

    const barlines = renderBarlines(leftBarline, rightBarline);
    const timeSignature = renderTimeSig(leftBarline, timeSig, timeSigSize);

    // const [width, setWidth] = useState(document.getElementById("staff").clientWidth);

    const renderStaffLines = (spaceBetweenLines = 25) => {
        let lines = []
        for (let i = 0; i < 5; i++) {
            lines.push(<line x1="0" y1={`${i * spaceBetweenLines}%`} x2="100%" y2={`${i * spaceBetweenLines}%`} stroke="black" />)
        }
        return lines;
    }

    // console.log(width)
    // window.onresize = () => { setWidth(document.getElementById("staff").clientWidth) }

    return (
        <div id="staff" style={{ border: "1px solid blue", height: "100%" }}>

            <svg width="100%" height="50%">
                {showTimeSig && timeSignature}
                {renderStaffLines()}
                {barlines.left}
                {barlines.right}
                <g transform="skewX(150) translate(13)" >
                    <ellipse cx={100 / 8 + "%"} cy='12.5%' rx='.70vw' ry='.65vw' />
                </g>
                <g transform="skewX(150) translate(33)" >
                    <ellipse cx={100 / 8 + "%"} cy='12.5%' rx='.70vw' ry='.65vw' />
                </g>
                <g transform="skewX(150) translate(53)" >
                    <ellipse cx={100 / 8 + "%"} cy='12.5%' rx='.70vw' ry='.65vw' />
                </g>
                <g transform="skewX(150) translate(73)" >
                    <ellipse cx={100 / 8 + "%"} cy='12.5%' rx='.70vw' ry='.65vw' />
                </g>
            </svg>
            <p style={{
                fontSize: "2vw",
                marginLeft: "5vw",
                marginTop: "3%",
                marginBottom: "3%"
            }}>{measureNumber + 1}</p>
        </div>
    )
}

export default Staff
