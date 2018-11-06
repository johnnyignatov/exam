import React from 'react';
import uuid from 'uuid/v4';

const Image = props => {
    const topLeft = {
        top: `1rem`,
        left: `1rem`,
        bottom: 'initial',
        right: 'initial'
    };
    const topRight = {
        top: `1rem`,
        bottom: 'initial',
        left: 'initial',
        right: `1rem`
    };
    const bottomLeft = {
        bottom: `1rem`,
        top: 'initial',
        right: 'initial',
        left: `1rem`
    };
    const bottomRight = {
        bottom: `1rem`,
        right: `1rem`,
        top: 'initial',
        left: 'initial'
    };
    const definePosition = position => {
        const TOP_RIGHT = 'top right';
        const TOP_LEFT = 'top left';
        const BOTOM_LEFT = 'bottom left';
        const BOTTOM_RIGHT = 'bottom right';
        switch (position) {
            case TOP_LEFT: return topLeft
            case TOP_RIGHT: return topRight
            case BOTOM_LEFT: return bottomLeft
            case BOTTOM_RIGHT: return bottomRight
                
            default:
                break;
        }
    }
    return (
        <li 
            onClick={props.onClick}
            key={uuid()}
        >
            <img src={props.src} alt=''/>
            {
                props.alt && 
                <div className='tooltip' style={definePosition(props.position)}>
                    <span className='tooltip-text'>{props.alt}</span>
                </div>
            }
        </li>
    );
}

export default Image;

