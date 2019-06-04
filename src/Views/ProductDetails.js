import React, { Fragment, useState, useEffect } from "react";
import { withStyles } from '@material-ui/core/styles';
import { BASE_API_URL } from "../shared/Api.constants";
import Loader from 'react-loader-spinner';
import Product from '../shared/Product.component';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: 30
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        float: 'right',
        margin: 30
    },
    loader: {
        textAlign: 'center',
        marginTop: 100
    }
});

function ProductDetails(props) {
    const { classes } = props;

    const [loader, setLoader] = useState(false);

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const { match: { params: { id } } } = props;

        setLoader(true);

        fetch(BASE_API_URL + '/getProductDetails/' + id)
            .then(res => res.json())
            .then(res => {
                setLoader(false);
                setProduct(res);
            })
            .catch(err => {
                setLoader(false);
                console.log(err)
            }
            );
    }, []);

    const goBack = () => {
        props.history.push('/');
    };

    return (
        <Fragment>
            <Button variant="contained" color="primary" className={classes.button} onClick={goBack}>
                Back
                </Button>
            {loader ? <div className={classes.loader}>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height="100"
                    width="100"
                />
            </div> :
                <Product product={product} />}
        </Fragment>
    )
}

export default withStyles(styles)(ProductDetails);
