import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../redux/actions';
import { RootStore } from '../utils/types';

const ProductList = () => {

    const { products } = useSelector((state: RootStore) => state);
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <Grid container direction='row' justifyContent={'space-between'} alignItems='center'>
            {products.map((product) => (
                <Grid item xs={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component='img' image={product.image} alt={product.name} width={280} height={250}/>
                            <CardContent>
                                <Typography variant='h5' gutterBottom>{product.name}</Typography>
                                <Typography variant='body1'>{t('products.price', { price: product.price })}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;