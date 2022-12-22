import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions';

const RegisterForm = () => {

    const [state, setState] = useState(
        {
            username: '',
            email: '',
            password: ''
        }
    );
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(register({ username: state.username, email: state.email, password: state.password }));
    };

    return (
        <Box>
            <Grid direction={'column'} spacing={3}>
                <form onSubmit={onSubmit}>
                    <Grid item>
                        <TextField label={t('auth.username')} type={'text'} onChange={(e) => setState({ ...state, username: e.target.value })} variant='standard'/>
                    </Grid>
                    <Grid item>
                        <TextField label={t('auth.email')} type={'email'} onChange={(e) => setState({ ...state, email: e.target.value })} variant='standard'/>
                    </Grid>
                    <Grid item>
                        <TextField label={t('auth.password')} type={'password'} onChange={(e) => setState({ ...state, password: e.target.value })} variant='standard'/>
                    </Grid>
                    <Grid item>
                        <Button type='submit'>{t('auth.register')}</Button>
                    </Grid>
                </form>
            </Grid>
        </Box>
    );
};

export default RegisterForm;