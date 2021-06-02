const left = {
    startRepeat:
        <>
            <line x1="0" y1="0" x2="0" y2="100%" stroke="black" strokeWidth=".5vw" />
            <line x1="2%" y1="0" x2="2%" y2="100%" stroke="black" />
            <circle cx=".8vw" cy="38%" r=".25vw" />
            <circle cx=".8vw" cy="63%" r=".25vw" />
        </>,

    single: <line x1="0" y1="0" x2="0" y2="100%" stroke="black" />,
    double: <>
        <line x1="0" y1="0" x2="0" y2="100%" stroke="black" />
        <line x1=".9%" y1="0" x2=".9%" y2="100%" stroke="black" />
    </>
}

const right = {
    endRepeat: <></>,
    single: <line x1="100%" y1="0%" x2="100%" y2="100%" stroke="black" />,
    double:
        <>
            <line x1="100%" y1="0%" x2="100%" y2="100%" stroke="black" />
            <line x1="99.1%" y1="0%" x2="99.1%" y2="100%" stroke="black" />
        </>
}

export function renderBarlines(leftBarline, rightBarline) {

    return { left: left[leftBarline], right: right[rightBarline] }

}