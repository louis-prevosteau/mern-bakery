import { IconButton, Dialog, DialogTitle, TextField, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { Category } from '../utils/interfaces';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../redux/actions';
import { useTranslation } from 'react-i18next';
import { Edit } from '@mui/icons-material';

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

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(updateCategory(state.category));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Edit/>
            </IconButton>
            <Dialog open={state.open} onClose={onClose}>
                <DialogTitle>{t('categories.update.title', { category: category.name })}</DialogTitle>
                <form onSubmit={onSubmit}>
                    <Grid direction='column'>
                        <Grid item>
                            <TextField label={t('categories.fields.name')} value={state.category.name} onChange={(e) => setState({ ...state, category: { ...state.category, name: e.target.value }})}/>
                        </Grid>
                        <Button type='submit'>{t('categories.update.update')}</Button>
                    </Grid>
                </form>
            </Dialog>
        </div>
    );
};

export default UpdateCategoryModal;