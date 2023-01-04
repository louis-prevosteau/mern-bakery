import { Add } from '@mui/icons-material';
import { Button, Dialog, DialogTitle, Grid, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { createSchedule } from '../redux/actions';

const CreateScheduleModal = () => {

    const [state, setState] = useState(
        {
            open: false,
            schedule: {
                day: '',
                morningOpen: '' ,
                morningClose: '',
                afternoonOpen: '',
                afternoonClose: ''
            }
        }
    );
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    const onOpen = () => setState({ ...state, open: true });

    const onClose = () => setState({ ...state, open: false });

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(createSchedule(state.schedule));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Add/>
            </IconButton>
            <Dialog open={state.open} onClose={onClose}>
                <DialogTitle>{t('schedules.create.title')}</DialogTitle>
                <form onSubmit={onSubmit}>
                    <Grid direction={'column'}>
                        <Grid item>
                            <TextField label={t('schedules.fields.day')} type='text' onChange={(e) => setState({ ...state, schedule: { ...state.schedule, day: e.target.value } })}/>
                        </Grid>
                        <Grid item>
                            <TextField fullWidth label={t('schedules.fields.morningOpen')} type='time' onChange={(e) => setState({ ...state, schedule: { ...state.schedule, morningOpen: e.target.value } })}/>
                        </Grid>
                        <Grid item>
                            <TextField fullWidth label={t('schedules.fields.morningClose')} type='time' onChange={(e) => setState({ ...state, schedule: { ...state.schedule, morningClose: e.target.value } })}/>
                        </Grid>
                        <Grid item>
                            <TextField fullWidth label={t('schedules.fields.afternoonOpen')} type='time' onChange={(e) => setState({ ...state, schedule: { ...state.schedule, afternoonOpen: e.target.value } })}/>
                        </Grid>
                        <Grid item>
                            <TextField fullWidth label={t('schedules.fields.afternoonClose')} type='time' onChange={(e) => setState({ ...state, schedule: { ...state.schedule, afternoonClose: e.target.value} })}/>
                        </Grid>
                    </Grid>
                    <Button type='submit'>{t('schedules.create.add')}</Button>
                </form>
            </Dialog>
        </div>
    );
};

export default CreateScheduleModal;