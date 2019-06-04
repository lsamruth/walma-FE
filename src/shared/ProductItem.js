import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    height: 170,

  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  description: {
    textOverflow: 'ellipsis',
    maxHeight: 100,
  }
});

function ProductItem(props) {
  const { classes, product } = props;
  const { productName, price, reviewRating, productImage, inStock, reviewCount, productId } = product;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={productImage} />
            </ButtonBase>
            <Grid item>
              <Typography align="center" variant="subtitle1">{price}</Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {productName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Review Rating : {reviewRating} <br />
                  inStock : {inStock ? 'Yes' : 'No'}<br />
                  Review Count : {reviewCount}<br />
                  <Link to={`/productDetails/${productId}`}>More Details</Link>
                </Typography>
                <Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ProductItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductItem);