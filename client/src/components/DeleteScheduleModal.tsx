import { Delete } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { deleteSchedule } from '../redux/actions';
import { Schedule } from '../utils/interfaces';

const DeleteScheduleModal = ({ schedule }: { schedule: Schedule }) => {

    const [state, setState] = useState(
        {
            open: false
        }
    );
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    const onOpen = () => setState({ ...state, open: true });

    const onClose = () => setState({ ...state, open: false });

    const onDelete = (e: any) => {
        e.preventDefault();
        dispatch(deleteSchedule(schedule._id));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Delete/>
            </IconButton>
            <Dialog open={state.open} onClose={onClose}>
                <DialogTitle>{t('schedules.delete.title', { schedule: schedule.day })}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{t('schedules.delete.text', { schedule: schedule.day })}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>{t('schedules.delete.cancel')}</Button>
                    <Button onClick={onDelete}>{t('schedules.delete.delete')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteScheduleModal;