import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Category } from '../utils/interfaces';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { deleteCategory } from '../redux/actions';
import { Delete } from '@mui/icons-material';

const DeleteCategoryDialog = ({ category }: { category: Category }) => {

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
        dispatch(deleteCategory(category._id));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Delete/>
            </IconButton>
            <Dialog open={state.open} onClose={onClose}>
                <DialogTitle>{t('categories.delete.title', { category: category.name })}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{t('categories.delete.text', { category: category.name })}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>{t('categories.delete.cancel')}</Button>
                    <Button onClick={onDelete}>{t('categories.delete.delete')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteCategoryDialog;