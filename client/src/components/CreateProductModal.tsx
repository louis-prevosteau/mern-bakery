import { Add } from '@mui/icons-material';
import { Button, Dialog, DialogTitle, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, getCategories } from '../redux/actions';
import { RootStore } from '../utils/types';
// @ts-ignore
import FileBase from 'react-file-base64';

const CreateProductModal = () => {

    const [state, setState] = useState(
        {
            open: false,
            product: {
                name: '',
                image: null,
                price: 0,
                category: {}
            }
        }
    );
    const { categories } = useSelector((state: RootStore) => state);
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getCategories())
    }, []);

    const onOpen = () => setState({ ...state, open: true });

    const onClose = () => setState({ ...state, open: false });

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(createProduct(state.product));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Add/>
            </IconButton>
            <Dialog open={state.open} onClose={onClose}>
                <DialogTitle>{t('products.create.title')}</DialogTitle>
                <form onSubmit={onSubmit}>
                    <Grid direction={'column'}>
                        <Grid item>
                            <TextField label={t('products.fields.name')} type='text' onChange={(e) => setState({ ...state, product: { ...state.product, name: e.target.value } })}/>
                        </Grid>
                        <Grid item>
                            <FileBase label={t('products.fields.image')} type='file' multiple={false} onDone={({ base64 }: { base64: any }) => setState({ ...state, product: { ...state.product, image: base64 } })}/>
                        </Grid>
                        <Grid item>
                            <TextField label={t('products.fields.price')} type='number' inputProps={{ step: 0.01 }} onChange={(e) => setState({ ...state, product: { ...state.product, price: Number(e.target.value) } })}/>
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth>
                                <InputLabel>{t('products.fields.category')}</InputLabel>
                                <Select label={t('products.fields.category')} onChange={(e) => setState({ ...state, product: { ...state.product, category: String(e.target.value) } })}>
                                    {categories.map((category) => (
                                        <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Button type='submit'>{t('products.create.add')}</Button>
                    </Grid>
                </form>
            </Dialog>
        </div>
    );
};

export default CreateProductModal;