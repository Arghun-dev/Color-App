import React from 'react';
import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends React.Component {
    render() {
        const {paletts} = this.props;
        return (
            <div>
                <h1>React Colors</h1>
                {paletts.map(palette => <MiniPalette {...palette} />)}
            </div>
        )
    }
}

export default PaletteList;