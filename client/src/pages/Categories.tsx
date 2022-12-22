import { Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CategoryList from '../components/CategoryList';
import CreateCategoryModal from '../components/CreateCategoryModal';

const Categories = () => {

    const { t } = useTranslation();

    return (
        <Container maxWidth='sm'>
            <Typography variant='h4' textAlign={'center'}>{t('categories.title')}</Typography>
            <CategoryList/>
            <CreateCategoryModal/>
        </Container>
    );
};

export default Categories;