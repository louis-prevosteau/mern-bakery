import { Edit } from '@mui/icons-material';
import { Button, Dialog, DialogTitle, Grid, IconButton, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, updateProduct } from '../redux/actions';
import { Product } from '../utils/interfaces';
import { RootStore } from '../utils/types';

const UpdateProductModal = ({ product }: { product: Product }) => {

    const [state, setState] = useState(
        {
            open: false,
            product: product
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
        dispatch(updateProduct(state.product));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Edit/>
            </IconButton>
            <Dialog open={state.open} onClose={onClose}>
                <DialogTitle>{t('products.update.title', { product: product.name })}</DialogTitle>
                <form onSubmit={onSubmit}>
                    <Grid direction={'column'}>
                        <Grid item>
                            <TextField value={product.name} label={t('products.fields.name')} type='text' onChange={(e) => setState({ ...state, product: { ...state.product, name: e.target.value } })}/>
                        </Grid>
                        <Grid item>
                            <TextField value={product.price} label={t('products.fields.price')} type='number' inputProps={{ step: 0.01 }} onChange={(e) => setState({ ...state, product: { ...state.product, price: Number(e.target.value) } })}/>
                        </Grid>
                        <Grid item>
                            <Select label={t('products.fields.category')} onChange={(e) => setState({ ...state, product: { ...state.product, category: Object(e.target.value) } })}>
                                {categories.map((category) => (
                                    <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Button type='submit'>{t('products.create.add')}</Button>
                    </Grid>
                </form>
            </Dialog>
        </div>
    );
};

export default UpdateProductModal;