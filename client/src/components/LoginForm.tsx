import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions';

const LoginForm = () => {

    const [state, setState] = useState(
        {
            email: '',
            password: ''
        }
    );
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(login({ email: state.email, password: state.password }));
        navigate('/products');
    };

    return (
        <Box>
            <Grid direction={'column'} spacing={3}>
                <form onSubmit={onSubmit}>
                    <Grid item>
                        <TextField label={t('auth.email')} type={'email'} onChange={(e) => setState({ ...state, email: e.target.value })} variant='standard'/>
                    </Grid>
                    <Grid item>
                        <TextField label={t('auth.password')} type={'password'} onChange={(e) => setState({ ...state, password: e.target.value })} variant='standard'/>
                    </Grid>
                    <Grid item>
                        <Button type='submit'>{t('auth.login')}</Button>
                    </Grid>
                </form>
            </Grid>
        </Box>
    );
};

export default LoginForm;