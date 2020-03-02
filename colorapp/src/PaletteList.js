import React from 'react';
import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends React.Component {
    render() {
        const {paletts} = this.props;
        return (
            <div>
                <MiniPalette />
                <h1>React Colors</h1>
                {paletts.map(palette => <p><Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link></p>)}
            </div>
        )
    }
}

export default PaletteList;