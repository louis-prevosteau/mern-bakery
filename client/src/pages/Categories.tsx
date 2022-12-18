import { Container } from '@mui/material';
import React from 'react';
import CategoryList from '../components/CategoryList';

const Categories = () => {
    return (
        <Container maxWidth='sm'>
            <CategoryList/>
        </Container>
    );
};

export default Categories;