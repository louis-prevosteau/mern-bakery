import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CategoryFilter from '../components/CategoryFilter';
import CreateProductModal from '../components/CreateProductModal';
import ProductList from '../components/ProductList';

const Products = () => {

    const { t } = useTranslation();

    return (
        <Container maxWidth='sm'>
            <Grid>
                <Typography variant='h4' textAlign={'center'}>{t('products.title')}</Typography>
                <CategoryFilter/>
                <ProductList/>
            </Grid>
            {localStorage.getItem('profile') && <CreateProductModal/>}
        </Container>
    );
};

export default Products;