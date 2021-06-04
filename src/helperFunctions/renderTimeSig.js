export function renderTimeSig(leftBarline, timeSig, timeSigSize) {
    return (
        <>
            <text style={{ fontSize: `${timeSigSize}vw` }} x={leftBarline === "startRepeat" ? "1vw" : ".3vw"} y="45%">
                {timeSig[0]}
            </text>

            <text style={{ fontSize: `${timeSigSize}vw` }} x={leftBarline === "startRepeat" ? "1vw" : ".3vw"} y="90%">
                {timeSig[1]}
            </text>
        </>
    )
}