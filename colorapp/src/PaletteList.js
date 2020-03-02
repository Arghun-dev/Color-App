import React from 'react';
import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: "80%",
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        color: 'white'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '80%',
        height: '80%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}

class PaletteList extends React.Component {
    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const {paletts, classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {paletts.map(palette => <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);