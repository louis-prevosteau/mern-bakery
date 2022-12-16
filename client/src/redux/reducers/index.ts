import { combineReducers } from "redux";
import { authenticationReducer } from './authenticationReducer';
import { categoriesReducer } from './categoryReducer';
import { productsReducer, productReducer } from './productReducer';
import { profileReducer } from './userReducer';

export default combineReducers(
    {
        authenticationReducer,
        categoriesReducer,
        productsReducer,
        productReducer,
        profileReducer
    }
);