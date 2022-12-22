import { Container, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Authentication = () => {

    const [state, setState] = useState(
        {
            mode: 'login'
        }
    );
    const { t } = useTranslation();

    const onSetMode = (e: any, mode: string) => {
        setState({ ...state, mode });
    };

    return (
        <Container>
            <ToggleButtonGroup value={state.mode} exclusive onChange={onSetMode}>
                <ToggleButton value='login'>{t('auth.login')}</ToggleButton>
                <ToggleButton value='register'>{t('auth.register')}</ToggleButton>
            </ToggleButtonGroup>
            {state.mode === 'login' && <LoginForm/>}
            {state.mode === 'register' && <RegisterForm/>}
        </Container>
    );
};

export default Authentication;