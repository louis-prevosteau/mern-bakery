import { AppBar, BottomNavigation, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <AppBar position="static" style={{top: "auto", bottom: 0}}>
            <BottomNavigation style={{ background: '#292C30' }}>
                <Typography fontWeight='bold' color='lightgoldenrodyellow'>{t('main.credit', { year: new Date().getFullYear()})}</Typography>
            </BottomNavigation>
        </AppBar>
    );
};

export default Footer;