import { Info } from '@mui/icons-material';
import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../redux/actions';
import { RootStore } from '../utils/types';

const ProductList = () => {

    const { products } = useSelector((state: RootStore) => state);
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const breads = products.filter((product) => product.category?.name === 'Pain');
    const pastries = products.filter((product) => product.category?.name === 'Viennoiserie');
    const cakes = products.filter((product) => product.category?.name === 'Pâtisserie');
    const sandwichs = products.filter((product) => product.category?.name === 'Sandwich');
    const pizzas = products.filter((product) => product.category?.name === 'Pizza');

    useEffect(() => {
        dispatch(getProducts());
    }, [products]);

    return (
        <div>
            <ImageList>
                <ImageListItem cols={2}>
                    <ListSubheader>{t('products.subtitles.bread')}</ListSubheader>
                </ImageListItem>
                {breads.map((bread) => (
                    <ImageListItem key={bread._id}>
                        <img src={bread.image} alt={bread.name}/>
                        <ImageListItemBar
                            title={bread.name}
                            actionIcon={
                                <IconButton onClick={() => navigate(`/products/${bread._id}`)}>
                                    <Info/>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <ImageList>
                <ImageListItem cols={2}>
                    <ListSubheader>{t('products.subtitles.pastries')}</ListSubheader>
                </ImageListItem>
                {pastries.map((pastrie) => (
                    <ImageListItem key={pastrie._id}>
                        <img src={pastrie.image} alt={pastrie.name}/>
                        <ImageListItemBar
                            title={pastrie.name}
                            actionIcon={
                                <IconButton onClick={() => navigate(`/products/${pastrie._id}`)}>
                                    <Info/>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <ImageList>
                <ImageListItem cols={2}>
                    <ListSubheader>{t('products.subtitles.cake')}</ListSubheader>
                </ImageListItem>
                {cakes.map((cake) => (
                    <ImageListItem key={cake._id}>
                        <img src={cake.image} alt={cake.name}/>
                        <ImageListItemBar
                            title={cake.name}
                            actionIcon={
                                <IconButton onClick={() => navigate(`/products/${cake._id}`)}>
                                    <Info/>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <ImageList>
                <ImageListItem cols={2}>
                    <ListSubheader>{t('products.subtitles.pizza')}</ListSubheader>
                </ImageListItem>
                {pizzas.map((pizza) => (
                    <ImageListItem key={pizza._id}>
                        <img src={pizza.image} alt={pizza.name}/>
                        <ImageListItemBar
                            title={pizza.name}
                            actionIcon={
                                <IconButton onClick={() => navigate(`/products/${pizza._id}`)}>
                                    <Info/>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};

export default ProductList;