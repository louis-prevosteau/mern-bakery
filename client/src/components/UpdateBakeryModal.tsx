import { Edit } from '@mui/icons-material';
import { Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { updateBakery } from '../redux/actions';
import { Bakery } from '../utils/interfaces';

const UpdateBakeryModal = ({ bakery }: { bakery: Bakery }) => {

    const [state, setState] = useState(
        {
            open: false,
            bakery: bakery
        }
    );
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    const onOpen = () => setState({ ...state, open: true });

    const onClose = () => setState({ ...state, open: false });

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(updateBakery(state.bakery));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Edit/>
            </IconButton>
            <Dialog open={state.open} onClose={onClose}>
                <DialogTitle>{t('bakeries.update.title', { bakery: bakery.address })}</DialogTitle>
                <DialogContent>
                    <form onSubmit={onSubmit}>
                        <Grid direction='column'>
                            <Grid item>
                                <TextField label={t('bakeries.fields.address')} type='text' value={state.bakery.address} onChange={(e) => setState({ ...state, bakery: { ...state.bakery, address: e.target.value } })}/>
                            </Grid>
                            <Grid item>
                                <TextField label={t('bakeries.fields.city')} type='text' value={state.bakery.city} onChange={(e) => setState({ ...state, bakery: { ...state.bakery, city: e.target.value } })}/>
                            </Grid>
                            <Grid item>
                                <TextField label={t('bakeries.fields.zipcode')} type='text' value={state.bakery.zipcode} onChange={(e) => setState({ ...state, bakery: { ...state.bakery, zipcode: e.target.value } })}/>
                            </Grid>
                            <Grid item>
                                <TextField label={t('bakeries.fields.country')} type='text' value={state.bakery.country} onChange={(e) => setState({ ...state, bakery: { ...state.bakery, country: e.target.value } })}/>
                            </Grid>
                            <Grid item>
                                <TextField label={t('bakeries.fields.phone')} type='text' value={state.bakery.phone} onChange={(e) => setState({ ...state, bakery: { ...state.bakery, phone: e.target.value } })}/>
                            </Grid>
                            <Button type='submit'>{t('bakeries.update.update')}</Button>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default UpdateBakeryModal;