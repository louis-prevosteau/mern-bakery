import { Delete } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { deleteBakery } from '../redux/actions';
import { Bakery } from '../utils/interfaces';

const DeleteBakeryModal = ({ bakery }: { bakery: Bakery }) => {

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
        dispatch(deleteBakery(bakery._id));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Delete/>
            </IconButton>
            <Dialog open={state.open} onClose={onClose}>
                <DialogTitle>{t('bakeries.delete.title', { bakery: bakery.address })}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{t('bakeries.delete.text', { bakery: bakery.address })}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>{t('bakeries.delete.cancel')}</Button>
                    <Button onClick={onDelete}>{t('bakeries.delete.delete')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteBakeryModal;