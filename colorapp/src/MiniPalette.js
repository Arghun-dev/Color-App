import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    main: {
        backgroundColor: 'purple',
        border: '2px solid teal',
        height: '5rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'white',
        "& h1": {
            backgroundColor: 'black',
            color: 'white',
            "& span": {
                backgroundColor: 'blue',
                color: 'yellow'
            }
        }
    },

    secondary: {
        backgroundColor: 'pink',
        border: '2px solid teal',
        height: '5rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'white'
    }
}

function MiniPalette(props){
    const {classes} = props;
    return (
        <div className={classes.main}>
            <h1>MiniPalette <span>This is span</span></h1>
            <h2 className={classes.secondary}>Secondary</h2>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);