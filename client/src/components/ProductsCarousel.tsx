import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { ImageListItem, ImageListItemBar } from '@mui/material';
import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions';
import { RootStore } from '../utils/types';

const ProductsCarousel = () => {

    const { products } = useSelector((state: RootStore) => state);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const shuffledProducts = products.sort((a, b) => 0.5 - Math.random()).splice(0,5);

    return (
        <Carousel
            PrevIcon={<ArrowBack/>}
            NextIcon={<ArrowForward/>}
            animation='slide'
            fullHeightHover={true}
        >
            {shuffledProducts.map((product) => (
                <ImageListItem key={product._id}>
                    <img src={product.image} alt={product.name}/>
                    <ImageListItemBar title={product.name}/>
                </ImageListItem>
            ))}
        </Carousel>
    );
};

export default ProductsCarousel;