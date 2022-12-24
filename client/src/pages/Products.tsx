import { Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CreateProductModal from '../components/CreateProductModal';
import ProductList from '../components/ProductList';

const Products = () => {

    const { t } = useTranslation();

    return (
        <Container maxWidth='sm'>
            <Typography variant='h4' textAlign={'center'}>{t('products.title')}</Typography>
            <ProductList/>
            <CreateProductModal/>
        </Container>
    );
};

export default Products;