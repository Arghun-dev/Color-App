import React from 'react';
import './ColorBox.css';

const ColorBox = ({name, color}) => {
    return (
        <div style={{backgroundColor: `${color}`}} className='color-box'>
            <span style={{padding: '.5rem'}}>{name}</span>
            <span style={{padding: '.5rem'}}>More</span>
        </div>
    )
}

export default ColorBox;