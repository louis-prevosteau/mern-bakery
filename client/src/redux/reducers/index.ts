import { combineReducers } from "redux";
import { authenticationReducer } from './authenticationReducer';
import { bakeriesReducer } from "./bakeryReducer";
import { categoriesReducer } from './categoryReducer';
import { productsReducer, productReducer } from './productReducer';
import { schedulesReducer } from "./scheduleReducer";
import { profileReducer } from './userReducer';

export default combineReducers(
    {
        auth: authenticationReducer,
        bakeries: bakeriesReducer,
        categories: categoriesReducer,
        products: productsReducer,
        product: productReducer,
        profile: profileReducer,
        schedules: schedulesReducer
    }
);