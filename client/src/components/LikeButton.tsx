import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { likeProduct, unlikeProduct } from '../redux/actions';
import { Product } from '../utils/interfaces';

const LikeButton = ({ product }: { product: Product }) => {

    const [state, setState] = useState(
        {
            liked: false
        }
    );
    const { user } = JSON.parse(localStorage.getItem('profile') as string);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        if (product.likes?.includes(user?._id)) setState({ liked: true });
        else setState({ liked: false });
    }, [user, product.likes, state.liked]);

    const like = () => {
        dispatch(likeProduct(product._id));
        setState({ liked: true });
    };

    const unlike = () => {
        dispatch(unlikeProduct(product._id));
        setState({ liked: false });
    };

    return (
        <IconButton onClick={state.liked ? unlike : like}>
            {state.liked ? <Favorite/> : <FavoriteBorder/>}
        </IconButton>
    );
};

export default LikeButton;