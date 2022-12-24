import { Add } from '@mui/icons-material';
import { Button, Dialog, DialogTitle, Grid, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { createCategory } from '../redux/actions';

const CreateCategoryModal = () => {

    const [state, setState] = useState(
        {
            open: false,
            category: {
                name: ''
            }
        }
    );
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    const onOpen = () => setState({ ...state, open: true });

    const onClose = () => setState({ ...state, open: false });

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(createCategory(state.category));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Add/>
            </IconButton>
            <Dialog open={state.open} onClose={onClose}>
                <DialogTitle>{t('categories.create.title')}</DialogTitle>
                <form onSubmit={onSubmit}>
                    <Grid direction={'column'}>
                        <Grid item>
                            <TextField label={t('categories.fields.name')} type='text' onChange={(e) => setState({ ...state, category: { ...state.category, name: e.target.value } })}/>
                        </Grid>
                        <Button type='submit'>{t('categories.create.add')}</Button>
                    </Grid>
                </form>
            </Dialog>
        </div>
    );
};

export default CreateCategoryModal;