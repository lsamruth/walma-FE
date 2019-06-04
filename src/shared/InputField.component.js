import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
});

function InputField(props) {
    const {name, label, classes, onChange} = props;
    return (
        <TextField
            id="outlined-name"
            label={label}
            className={classes.textField}
            name={name}
            onChange={onChange}
            margin="normal"
            variant="outlined"
        />
    )
}

export default withStyles(styles)(InputField);