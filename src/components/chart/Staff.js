import React from 'react'

const Staff = ({ measureNumber }) => {
    return (
        <div style={{ height: "100%" }}>

            <svg width="100%" height="50%">
                {measureNumber === 0 && (
                    <>
                        <text style={{ fontSize: '3vw' }} x=".1%" y="45%">
                            2
                        </text>

                        <text style={{ fontSize: '3vw' }} x=".1%" y="90%">
                            2
                        </text>
                    </>
                )}
                <line x1="0" y1="0" x2="100%" y2="0" stroke="black" />
                <line x1="0" y1="25%" x2="100%" y2="25%" stroke="black" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="black" />
                <line x1="0" y1="75%" x2="100%" y2="75%" stroke="black" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="black" />
                <line x1="0" y1="0" x2="0" y2="100%" stroke="black" />
                <line x1="100%" y1="0%" x2="100%" y2="100%" stroke="black" />
            </svg>
            <p style={{
                fontSize: "1.5vw",
                marginLeft: "10px"
            }}>{measureNumber + 1}</p>
        </div>
    )
}

export default Staff
