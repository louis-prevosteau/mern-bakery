import { AppBar, Box, Button, Container, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootStore } from '../utils/types';
import { logout } from '../redux/actions';

const Header = () => {

    const [state, setState] = useState(
        {
            menuOpen: null
        }
    );
    const { auth } = useSelector((state: RootStore) => state);
    const dispatch = useDispatch<any>();
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

    const onLogout = () => {
        dispatch(logout());
    };

    const onOpenMenu = (e: any) => {
        setState({ ...state, menuOpen: e.currentTarget });
    };

    const onCloseMenu = () => {
        setState({ ...state, menuOpen: null });
    };

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
                    <Box sx={{ flexGrow: 0 }}>
                        {!auth.profile ? (
                            <IconButton onClick={() => navigate('/auth')}>
                                <LoginIcon sx={{ color: 'white' }}/>
                            </IconButton>
                        ) : (
                            <div>
                                <IconButton onClick={onOpenMenu} aria-controls="user-menu">
                                    <AccountCircleIcon/>
                                </IconButton>
                                <Menu id='user-menu' anchorEl={state.menuOpen} keepMounted open={Boolean(state.menuOpen)} onClose={onCloseMenu}>
                                    <MenuItem onClick={() => navigate('/profile')}>{t('main.menu.profile')}</MenuItem>
                                    <MenuItem onClick={onLogout}>{t('main.menu.logout')}</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;