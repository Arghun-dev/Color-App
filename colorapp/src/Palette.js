import React from 'react';
import Navbar from './Navbar';
import './Palette.css';
import ColorBox from './ColorBox';



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
                <Navbar level={level} changeLevel={this.changeLevel} />
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