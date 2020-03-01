import React from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";

class Palette extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            level: 500
        }

        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(newLevel){
        this.setState({
            level: newLevel
        })
    }
    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
                name={color.name} 
                color={color.hex} 
            />
        ))
        return (
            <div className='Palette'>
                <Slider 
                    defaultValue={level} 
                    min={100} 
                    max={900} 
                    onAfterChange={this.changeLevel}
                    step={100} 
                />
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