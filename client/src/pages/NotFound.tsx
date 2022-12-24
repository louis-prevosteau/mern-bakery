import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <Container>
            <Grid direction='column' justifyContent={'center'} alignItems='center'>
                <Typography variant='body1'>{t('notFound.pageNotExist')}</Typography>
                <Button variant='contained' disableElevation onClick={() => navigate('/')}>{t('notFound.goBack')}</Button>
            </Grid>
        </Container>
    );
};

export default NotFound;