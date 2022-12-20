import { BottomNavigation, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <BottomNavigation>
            <Typography fontWeight='bold'>{t('main.credit', { year: new Date().getFullYear()})}</Typography>
        </BottomNavigation>
    );
};

export default Footer;