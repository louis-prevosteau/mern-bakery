import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProductsByCategory } from '../redux/actions';
import { RootStore } from '../utils/types';

const CategoryFilter = () => {

    const [state, setState] = useState(
        {
            category: {}
        }
    );
    const { categories } = useSelector((state: RootStore) => state);
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getCategories());
    },[]);

    const onFilter = () => {
        dispatch(getProductsByCategory(state.category));
    };

    return (
        <FormControl>
            <FormLabel>{t('products.byCategory')}</FormLabel>
            <RadioGroup value={state.category} onChange={(e) => setState({ ...state, category: e.target.value })}>
                {categories.map((category) => (
                    <FormControlLabel key={category._id} value={category._id} control={<Radio/>} label={category.name}/>
                ))}
            </RadioGroup>
            <Button onClick={onFilter}>{t('products.filter')}</Button>
        </FormControl>
    );
};

export default CategoryFilter;