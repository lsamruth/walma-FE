import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Home from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';

import {Link} from 'react-router-dom';

// import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
   // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  // title:{
  //   //marginLeft:"45%"
  // },
  header:{
      width:100,
      height:30
  }
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">

        <Toolbar>
          <IconButton edge="start" component={Link} to="/" className={classes.menuButton} color="inherit" aria-label="Menu">
            <Home />
          </IconButton>
          {/* <Typography variant="h6"  component={Link} to="/" className={classes.title}> */}
          <Toolbar>
          <Typography variant="h6" align="center" className={classes.title}>
            Walmart
          </Typography>
          </Toolbar>
          {/* <Typography variant="h6"  component={Link} to="/create" className={classes.title}>
            Create
          </Typography>
          <Typography component={Link} to="/about" variant="h6" className={classes.title}>
            About
          </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
