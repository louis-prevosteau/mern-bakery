import { Container } from '@mui/material';
import React from 'react';
import ProductsCarousel from '../components/ProductsCarousel';

const Home = () => {
    return (
        <Container maxWidth='sm'>
            <ProductsCarousel/>
        </Container>
    );
};

export default Home;