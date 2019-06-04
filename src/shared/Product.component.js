import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(5),
        margin: 'auto'
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
        textOverflow: 'ellipsis'
    }
});

function Product(props) {
    const { classes, product } = props;
    const { productName, shortDescription, longDescription, price, reviewRating, productImage, inStock, reviewCount } = product;
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid >
                    <Grid sm item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={productImage} />
                        </ButtonBase>
                    </Grid>

                    <Grid item container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>

                                <Typography gutterBottom variant="subtitle1">
                                    {productName}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Review Rating : {reviewRating} <br />
                                    inStock : {inStock ? 'Yes' : 'No'}<br />
                                    Review Count : {reviewCount}<br />
                                </Typography>


                                <div className={classes.description}>
                                    <Typography variant="body2" gutterBottom>
                                        <span dangerouslySetInnerHTML={{ __html: shortDescription }} />
                                        <span dangerouslySetInnerHTML={{ __html: longDescription }} />
                                    </Typography>
                                </div>
                                <Grid item>
                                    <Typography variant="subtitle1">Price : {price}</Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Paper>
        </div>
    );
}

Product.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Product);