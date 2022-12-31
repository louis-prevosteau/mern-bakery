import { Info } from '@mui/icons-material';
import { IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../redux/actions';
import { RootStore } from '../utils/types';

const ProductList = () => {

    const { products } = useSelector((state: RootStore) => state);
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <ImageList variant='quilted' cols={3}>
            {products.map((product) => (
                <ImageListItem cols={1} rows={1} key={product._id}>
                    <img src={product.image} alt={product.name}/>
                    <ImageListItemBar
                        title={product.name}
                        subtitle={product.category?.name}
                        actionIcon={
                            <IconButton onClick={() => navigate(`/products/${product._id}`)}>
                                <Info/>
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export default ProductList;