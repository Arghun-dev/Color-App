import React from 'react';
import Navbar from './Navbar';
import './Palette.css';
import ColorBox from './ColorBox';



class Palette extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            level: 500,
            format: 'hex'
        }

        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(newLevel){
        this.setState({
            level: newLevel
        })
    }
    changeFormat(val){
        this.setState({format: val})
    }
    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
                name={color.name} 
                color={color[format]} 
                key={color.id}
                id={color.id}
                paletteId={id}
            />
        ))
        return (
            <div className='Palette'>
                <Navbar 
                    level={level} 
                    changeLevel={this.changeLevel}
                    changeFormat={this.changeFormat}
                />
                
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                <div className='palette-footer'>
                    {paletteName}
                    <span className='emoji'>{emoji}</span>
                </div>
            </div>
        )
    }
}

export default Palette;