import { Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/actions';
import { RootStore } from '../utils/types';
import UpdateProfileAccordion from './UpdateProfileAccordion';

const UserCard = () => {

    const { profile } = useSelector((state: RootStore) => state);
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    return (
        <div>
            <Paper elevation={8}>
                <Typography variant='body2'>{t('profile.username', { username: profile.username })}</Typography>
                <Typography variant='body2'>{t('profile.email', { email: profile.email })}</Typography>
                <Typography variant='body2'>{t('profile.role', { role: profile.role })}</Typography>
            </Paper>
            <UpdateProfileAccordion profile={profile}/>
        </div>
    );
};

export default UserCard;