import { CREATE_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES, UPDATE_CATEGORY } from '../../utils/actionTypes';
import { Action, Category } from '../../utils/interfaces';

export const categoriesReducer = (state: Category[] = [], action: Action): Category[] => {
    switch (action.type) {
        case GET_CATEGORIES:
            return action.payload;
        case CREATE_CATEGORY:
            return [...state, action.payload];
        case UPDATE_CATEGORY:
            return state.map((category) => category._id === action.payload._id ? action.payload : category);
        case DELETE_CATEGORY:
            return state.filter((category) => category._id !== action.payload._id);
        default:
            return state;
    }
};