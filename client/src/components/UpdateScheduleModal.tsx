import { Edit } from '@mui/icons-material';
import { Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { updateSchedule } from '../redux/actions';
import { Schedule } from '../utils/interfaces';

const UpdateScheduleModal = ({ schedule }: { schedule: Schedule }) => {

    const [state, setState] = useState(
        {
            open: false,
            schedule: schedule
        }
    );
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    const onOpen = () => setState({ ...state, open: true });

    const onClose = () => setState({ ...state, open: false });

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(updateSchedule(schedule._id, state.schedule));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Edit/>
            </IconButton>
            <Dialog open={state.open} onClose={onClose}>
                <DialogTitle>{t('schedules.update.title', { schedule: schedule.day })}</DialogTitle>
                <DialogContent>
                    <form onSubmit={onSubmit}>
                        <Grid direction={'column'}>
                            <Grid item>
                                <TextField label={t('schedules.fields.day')} type='text' value={state.schedule.day} onChange={(e) => setState({ ...state, schedule: { ...state.schedule, day: e.target.value } })}/>
                            </Grid>
                            <Grid item>
                                <TextField fullWidth label={t('schedules.fields.morningOpen')} type='time' value={state.schedule.morningOpen} onChange={(e) => setState({ ...state, schedule: { ...state.schedule, morningOpen: e.target.value } })}/>
                            </Grid>
                            <Grid item>
                                <TextField fullWidth label={t('schedules.fields.morningClose')} type='time' value={state.schedule.morningClose} onChange={(e) => setState({ ...state, schedule: { ...state.schedule, morningClose: e.target.value } })}/>
                            </Grid>
                            <Grid item>
                                <TextField fullWidth label={t('schedules.fields.afternoonOpen')} type='time' value={state.schedule.afternoonOpen} onChange={(e) => setState({ ...state, schedule: { ...state.schedule, afternoonOpen: e.target.value } })}/>
                            </Grid>
                            <Grid item>
                                <TextField fullWidth label={t('schedules.fields.afternoonClose')} type='time' value={state.schedule.afternoonClose} onChange={(e) => setState({ ...state, schedule: { ...state.schedule, afternoonClose: e.target.value} })}/>
                            </Grid>
                        </Grid>
                        <Button type='submit'>{t('schedules.update.update')}</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default UpdateScheduleModal;