import React, { Component } from 'react';
import "rc-slider/assets/index.css";
import Slider from 'rc-slider';
import './Navbar.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            format: 'hex'
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({format: e.target.value})
        this.props.changeFormat(e.target.value)
    }
    render() {
        const {level, changeLevel} = this.props;
        const {format} = this.state;
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href='#'>reactcolorpicker</a>
                </div>
                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className='slider'>
                        <Slider 
                            defaultValue={level} 
                            min={100} 
                            max={900} 
                            onAfterChange={changeLevel}
                            step={100} 
                        />
                    </div>
                </div>
                <div className='select-container'>
                    <Select value={format} onChange={this.handleChange} >
                        <MenuItem value='hex'>HEX - #fff</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(256, 256, 256)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rgba(256, 256, 256, 1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default Navbar;