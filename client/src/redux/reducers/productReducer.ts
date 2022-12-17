import { CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, GET_PRODUCTS, UPDATE_PRODUCT } from "../../utils/actionTypes";
import { Action, Product } from "../../utils/interfaces";

export const productsReducer = (state: Product[] = [], action: Action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload;
        case CREATE_PRODUCT:
            return [...state, action.payload]
        case UPDATE_PRODUCT:
            return state.map((product) => product._id === action.payload._id ? action.payload : product);
        case DELETE_PRODUCT:
            return state.filter((product) => product._id !== action.payload._id);
        default:
            return state;
    }
};

export const productReducer = (state = null, action: Action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return action.payload;
        default:
            return state;
    }
};