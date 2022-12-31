import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, Container, Toolbar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions';
import { PAGES } from '../utils/pages';

const Header = () => {

    const [state, setState] = useState(
        {
            menuOpen: null,
            navMenuOpen: null
        }
    );
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const onLogout = () => {
        dispatch(logout());
    };

    const onOpenMenu = (e: any) => {
        setState({ ...state, menuOpen: e.currentTarget });
    };

    const onCloseMenu = () => {
        setState({ ...state, menuOpen: null });
    };

    const onOpenNavMenu = (e: any) => {
        setState({ ...state, navMenuOpen: e.currentTarget });
    };

    const onCloseNavMenu = () => {
        setState({ ...state, navMenuOpen: null });
    };

    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton onClick={onOpenNavMenu} aria-controls="navbar">
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="navbar"
                            anchorEl={state.navMenuOpen}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(state.navMenuOpen)}
                            onClose={onCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {PAGES.map((page) => (
                                <MenuItem onClick={() => navigate(page.path)}>
                                    <Typography>{t(page.name)}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <img src="./logo.png" alt="logo" width={60} height={60} style={{ 'marginRight': 50 }} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {PAGES.map((page) => (
                            <Button onClick={() => navigate(page.path)} sx={{ my: 2, color: 'white', display: 'block' }}>{t(page.name)}</Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {localStorage.getItem('profile') && (
                            <div>
                                <IconButton onClick={onOpenMenu} aria-controls="user-menu">
                                    <AccountCircle/>
                                </IconButton>
                                <Menu id='user-menu' anchorEl={state.menuOpen} keepMounted open={Boolean(state.menuOpen)} onClose={onCloseMenu}>
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