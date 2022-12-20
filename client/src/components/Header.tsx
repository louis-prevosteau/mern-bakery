import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootStore } from '../utils/types';

const Header = () => {

    const { auth } = useSelector((state: RootStore) => state);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const PAGES = [
        {
            path: '/products',
            name: 'main.menu.products'
        },
        {
            path: '/addresses',
            name: 'main.menu.addresses'
        }
    ];

    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <img src="./logo.png" alt="logo" width={60} height={60} style={{ 'marginRight': 50 }} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {PAGES.map((page) => (
                            <Button onClick={() => navigate(page.path)} sx={{ my: 2, color: 'white', display: 'block' }}>{t(page.name)}</Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;