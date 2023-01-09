import { Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BakeryList from '../components/BakeryList';
import CreateBakeryModal from '../components/CreateBakeryModal';

const Bakeries = () => {

    const { t } = useTranslation();

    return (
        <Container maxWidth='sm'>
            <Typography variant='h4' textAlign={'center'}>{t('bakeries.title')}</Typography>
            <BakeryList/>
            {JSON.parse(localStorage.getItem('profile') as string)?.user?.role === 'ADMIN' && (<CreateBakeryModal/>)}
        </Container>
    );
};

export default Bakeries;