import { Delete } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions';
import { Product } from '../utils/interfaces';

const DeleteProductDialog = ({ product }: { product: Product}) => {

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
        dispatch(deleteProduct(product._id));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Delete/>
            </IconButton>
            <Dialog open={state.open} onClose={onClose}>
                <DialogTitle>{t('products.delete.title', { product: product.name })}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{t('products.delete.text', { product: product.name })}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>{t('products.delete.cancel')}</Button>
                    <Button onClick={onDelete}>{t('products.delete.delete')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteProductDialog;