import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { getProduct } from '../redux/actions';
import { RootStore } from '../utils/types';

const Product = () => {

    const { id } = useParams();
    const { product } = useSelector((state: RootStore) => state);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getProduct(id));
    }, [id]);
    
    return (
        <Container maxWidth='sm'>
            <ProductDetails product={product}/>
        </Container>
    );
};

export default Product;