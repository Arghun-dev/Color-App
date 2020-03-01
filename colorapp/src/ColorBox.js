import React from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ColorBox = ({name, color}) => {
    return (
        <CopyToClipboard text={color}>
            <div style={{backgroundColor: `${color}`}} className='color-box'>
                <span className='copy'>Copy</span>
                <span className='name'>{name}</span>
                <span className='more'>More</span>
            </div>
        </CopyToClipboard>
    )
}

export default ColorBox;
