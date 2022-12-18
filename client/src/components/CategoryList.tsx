import { ButtonGroup, List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/actions';
import { RootStore } from '../utils/types';
import DeleteCategoryDialog from './DeleteCategoryDialog';
import UpdateCategoryModal from './UpdateCategoryModal';

const CategoryList = () => {

    const { categories } = useSelector((state: RootStore) => state);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <List>
            {categories.map((category) => (
                <ListItem
                    key={category._id}
                    disableGutters
                    secondaryAction={
                        <ButtonGroup>
                            <UpdateCategoryModal category={category}/>
                            <DeleteCategoryDialog category={category}/>
                        </ButtonGroup>
                    }
                >
                    <ListItemText primary={category.name}/>
                </ListItem>
            ))}
        </List>
    );
};

export default CategoryList;