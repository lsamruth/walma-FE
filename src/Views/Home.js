import React, { Fragment, useState, useEffect } from "react";
import ProductItem from '../shared/ProductItem';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputField from "../shared/InputField.component";
import Loader from 'react-loader-spinner';
import SnackBarAlert from "../shared/SnackBarAlert";
import { BASE_API_URL } from "../shared/Api.constants";


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
    textField: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
    },
});

function Home(props) {
    const { classes } = props;

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setLoader(true);
        fetch(BASE_API_URL + '/walmartproducts')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setLoader(false);
                setProducts(res);
            })
            .catch(err => {
                setLoader(false);
                console.log(err)
            }
            );
    }, []);

    const [loader, setLoader] = useState(false);

    const [inputValues, setInputValues] = useState({});
    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleCheckbox = name => event => {
        const { checked } = event.target;
        setInputValues({ ...inputValues, [name]: checked });
    };

    const applyFilter = () => {
        let url = new URL(BASE_API_URL + '/walmartproducts'),
            params = { ...inputValues };
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        setLoader(true);
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setLoader(false);
                setProducts(res);
            })
            .catch(err => {
                setLoader(false);
                console.log(err)
            }
            );

    }

    return (
        <Fragment>
            <div className={classes.root}>
                <form>
                    <InputField name="search" label="Search By Name" onChange={handleOnChange} />
                    <InputField name="minPrice" label="Min Price" onChange={handleOnChange} />
                    <InputField name="maxPrice" label="Max Price" onChange={handleOnChange} />
                    <InputField name="minReviewRating" label="Min Review Rating" onChange={handleOnChange} />
                    <InputField name="maxReviewRating" label="Max Review Rating" onChange={handleOnChange} />
                    <InputField name="minReviewCount" label="Min Review Count" onChange={handleOnChange} />
                    <InputField name="maxReviewCount" label="Max Review Count" onChange={handleOnChange} />
                    <span className={classes.controls}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={handleCheckbox('inStock')}
                                    value="inStock"
                                    color="primary"
                                    className={classes.textField}
                                />
                            }
                            label="inStock"
                        />
                        <Button variant="contained" color="primary" className={classes.button} onClick={applyFilter}>
                            Apply
                </Button>
                    </span>
                </form>
                {loader ? <div style={{ textAlign: 'center' }}>
                    <Loader

                        type="Puff"
                        color="#00BFFF"
                        height="100"
                        width="100"
                    />
                </div> :
                    <div>

                        {products && products.length > 0 ?
                            <div><SnackBarAlert message={`Showing ${products.length} products`} />
                                <Grid container spacing={3}>

                                    {products.map(product => {
                                        return <Grid key={product.productId} item xs={4}>
                                            <ProductItem product={product} />
                                        </Grid>
                                    })}
                                </Grid> </div> :
                            <SnackBarAlert message="No Products found, Please make changes to filter to to search products" />
                        }
                    </div>

                }



            </div>
        </Fragment>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
