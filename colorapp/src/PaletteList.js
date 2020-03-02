import React from 'react';
import {Link} from 'react-router-dom';

class PaletteList extends React.Component {
    render() {
        const {paletts} = this.props;
        return (
            <div>
                <h1>React Colors</h1>
                {paletts.map(palette => <p><Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link></p>)}
            </div>
        )
    }
}

export default PaletteList;