import { IconButton, Dialog, DialogTitle, TextField, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';
import { Category } from '../utils/interfaces';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../redux/actions';
import { useTranslation } from 'react-i18next';

const UpdateCategoryModal = ({ category }: { category: Category }) => {

    const [state, setState] = useState(
        {
            open: false,
            category: category
        }
    );
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    const onOpen = () => setState({ ...state, open: true });

    const onClose = () => setState({ ...state, open: false });

    const onSubmit = () => {
        dispatch(updateCategory(state.category));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <EditIcon/>
            </IconButton>
            <Dialog open={state.open} onClose={onClose}>
                <DialogTitle>{t('categories.update.title', { category: category.name })}</DialogTitle>
                <form onSubmit={onSubmit}>
                    <TextField label={t('categories.update.name')} value={state.category.name} onChange={(e) => setState({ ...state, category: { ...state.category, name: e.target.value }})}/>
                    <Button type='submit'>{t('categories.update.submit')}</Button>
                </form>
            </Dialog>
        </div>
    );
};

export default UpdateCategoryModal;