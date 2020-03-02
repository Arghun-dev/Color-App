import React, { Component } from 'react';
import "rc-slider/assets/index.css";
import Slider from 'rc-slider';
import './Navbar.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            format: 'hex',
            open: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
    }
    handleChange(e){
        this.setState({format: e.target.value, open: true})
        this.props.changeFormat(e.target.value)
    }
    closeSnackBar(){
        this.setState({open: false})
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
                <Snackbar 
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
                    open={this.state.open}
                    onClose={this.closeSnackBar}
                    autoHideDuration={3000} 
                    message={<span>Format Changed To {format.toUpperCase()}</span>}
                    action={[
                        <IconButton onClick={this.closeSnackBar} color='inherit'>
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}

export default Navbar;