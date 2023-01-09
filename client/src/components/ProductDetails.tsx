import { Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Grid, Typography } from '@mui/material';
import React from 'react';
import { Product } from '../utils/interfaces';
import UpdateProductModal from '../components/UpdateProductModal';
import DeleteProductDialog from './DeleteProductDialog';
import { useTranslation } from 'react-i18next';

const ProductDetails = ({ product }: { product: Product }) => {

    const { t } = useTranslation();

    return (
        <Card elevation={6}>
            <CardHeader title={product.name}/>
            <CardMedia component={'img'} image={product.image} alt={product.name}/>
            <CardContent>
                <Grid container direction='row' justifyContent={'space-between'}>
                    <Chip label={product.category?.name}/>
                    <Typography>{t('products.price', { price: product.price })}</Typography>
                </Grid>
            </CardContent>
            {JSON.parse(localStorage.getItem('profile') as string)?.user?.role === 'ADMIN' && (
                <CardActions>
                    <UpdateProductModal product={product}/>
                    <DeleteProductDialog product={product}/>
                </CardActions>
            )}
        </Card>
    );
};

export default ProductDetails;