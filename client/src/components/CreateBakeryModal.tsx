import { Add } from '@mui/icons-material';
import { Button, Dialog, DialogTitle, Grid, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { createBakery } from '../redux/actions';

const CreateBakeryModal = () => {

    const [state, setState] = useState(
        {
            open: false,
            bakery: {
                address: '',
                city: '',
                zipcode: '',
                country: '',
                phone: '',
                infos: ''
            }
        }
    );
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    const onOpen = () => setState({ ...state, open: true });

    const onClose = () => setState({ ...state, open: false });

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(createBakery(state.bakery));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Add/>
            </IconButton>
            <Dialog open={state.open} onClose={onClose}>
                <DialogTitle>{t('bakeries.create.title')}</DialogTitle>
                <form onSubmit={onSubmit}>
                    <Grid direction='column'>
                        <Grid item>
                            <TextField label={t('bakeries.fields.address')} type='text' onChange={(e) => setState({ ...state, bakery: { ...state.bakery, address: e.target.value } })}/>
                        </Grid>
                        <Grid item>
                            <TextField label={t('bakeries.fields.city')} type='text' onChange={(e) => setState({ ...state, bakery: { ...state.bakery, city: e.target.value } })}/>
                        </Grid>
                        <Grid item>
                            <TextField label={t('bakeries.fields.zipcode')} type='text' onChange={(e) => setState({ ...state, bakery: { ...state.bakery, zipcode: e.target.value } })}/>
                        </Grid>
                        <Grid item>
                            <TextField label={t('bakeries.fields.country')} type='text' onChange={(e) => setState({ ...state, bakery: { ...state.bakery, country: e.target.value } })}/>
                        </Grid>
                        <Grid item>
                            <TextField label={t('bakeries.fields.phone')} type='text' onChange={(e) => setState({ ...state, bakery: { ...state.bakery, phone: e.target.value } })}/>
                        </Grid>
                        <Grid item>
                            <TextField label={t('bakeries.fields.infos')} type='text'  multiline onChange={(e) => setState({ ...state, bakery: { ...state.bakery, infos: e.target.value } })}/>
                        </Grid>
                        <Button type='submit'>{t('bakeries.create.add')}</Button>
                    </Grid>
                </form>
            </Dialog>
        </div>
    );
};

export default CreateBakeryModal;