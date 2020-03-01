import React from 'react';
import './Palette.css';
import ColorBox from './ColorBox';

class Palette extends React.Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox name={color.name} color={color.color} />
        ))
        return (
            <div className='Palette'>
                {/* Navbar goes here */}
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                {/* footer goes here */}
            </div>
        )
    }
}

export default Palette;