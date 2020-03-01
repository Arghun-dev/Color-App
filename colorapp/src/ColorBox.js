import React from 'react';
import './ColorBox.css';

const ColorBox = ({name, color}) => {
    return (
        <div style={{backgroundColor: `${color}`}} className='color-box'>
            <span className='copy'>Copy</span>
            <span className='name'>{name}</span>
            <span className='more'>More</span>
        </div>
    )
}

export default ColorBox;