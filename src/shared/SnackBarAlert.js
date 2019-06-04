import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = theme => ({
    snackbar: {
        margin: 10,
        backgroundColor: 'blue',
        paddingLeft:"30%"
    },
});

function SnackBarAlert(props) {
    const { classes, message } = props;
    return (
       
        <SnackbarContent className={classes.snackbar} message={message} />
    )
}


export default withStyles(styles)(SnackBarAlert);