import React from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link, withRouter} from 'react-router-dom';

class ColorBox extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            copied: false
        }

        this.handleCopy = this.handleCopy.bind(this)
    }
    handleCopy(){
        this.setState({
            copied: true
        })

        setTimeout(() => {
            this.setState({ copied: false })
        }, 1500);
    }
    render(){
        const { copied } = this.state;
        const { color, name, paletteId, id } = this.props;
        return (
            <CopyToClipboard text={color} onCopy={this.handleCopy}>
                <div style={{backgroundColor: `${color}`}} className='color-box'>
                <div style={{backgroundColor: `${color}`}} className={`copy-overlay ${copied && 'show'}`} />
                <div className={`copy-msg ${copied && 'show'}`}>
                    <h1 className='copy-msg__heading'>Copied!</h1>
                    <span className='copy-msg__color'>{color}</span>
                </div>
                    <span className='copy'>Copy</span>
                    <span className='name'>{name}</span>
                    <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()} style={{textDecoration: 'none'}}>
                        <span className='more'>More</span>
                    </Link>
                </div>
            </CopyToClipboard>
        )
    }   
}

export default ColorBox;
