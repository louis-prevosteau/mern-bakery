import { Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CreateScheduleModal from '../components/CreateScheduleModal';
import ScheduleList from '../components/ScheduleList';

const Schedules = () => {

    const { t } = useTranslation();

    return (
        <Container maxWidth='sm'>
            <Typography variant='h4' textAlign='center'>{t('schedules.title')}</Typography>
            <ScheduleList/>
            {localStorage.getItem('profile') && (<CreateScheduleModal/>)}
        </Container>
    );
};

export default Schedules;