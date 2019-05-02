import React from 'react';

export default function Bar(props) {
    
    const size = getSize(props.number);
    const width = size.width;
    const height = size.height;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0px 2px', width: width, height: `${ height }px` }}>
            <svg width={`${width}px`} height={`${ height }px`}>
                <rect width={`${width}px`} height={`${ height}px`} style={{ fill: props.color }} />
            </svg>
        </div>
    )
}


const getSize = (number) => {

    let width;
    let height;

    const SMALL_WIDTH = 12;
    const MID_WIDTH = 22;
    const LARGE_WIDTH = 30;

    const SMALL_HEIGHT = 50;
    const MID_HEIGHT = 100;
    const LARGE_HEIGHT = 150;
    const LARGEST_HEIGHT = 200;

    switch(number) {
        case 1:
            width = SMALL_WIDTH
            height = MID_HEIGHT
        break;
        case 2:
            width = SMALL_WIDTH
            height = LARGE_HEIGHT
        break;
        case 3:
            width = SMALL_WIDTH
            height = LARGEST_HEIGHT
        break;
        case 4:
            width = MID_WIDTH
            height = SMALL_HEIGHT
        break;
        case 5:
            width = MID_WIDTH
            height = MID_HEIGHT
        break;
        case 6:
            width = MID_WIDTH
            height = LARGE_HEIGHT
        break;
        case 7:
            width = MID_WIDTH
            height = LARGEST_HEIGHT
        break;
        case 8:
            width = LARGE_WIDTH
            height = SMALL_HEIGHT
        break;
        case 9:
            width = LARGE_WIDTH
            height = MID_HEIGHT
        break;
        default: // 0
            width = SMALL_WIDTH
            height = SMALL_HEIGHT
    }

    return {
        width,
        height
    }
}
