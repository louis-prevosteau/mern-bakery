import { Dispatch } from "redux";
import * as api from '../../api';
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, GET_PRODUCTS, UPDATE_PRODUCT } from "../../utils/actionTypes";
import { Category, Product } from "../../utils/interfaces";

export const getProducts = () => async (dispatch: Dispatch) => {
    const { data } = await api.getProducts();
    dispatch(
        {
            type: GET_PRODUCTS,
            payload: data
        }
    );
};

export const getProductsByCategory = (category: Category) => async (dispatch: Dispatch) => {
    const { data } = await api.getProductsByCategory(category._id);
    dispatch(
        {
            type: GET_PRODUCTS,
            payload: data
        }
    );
};

export const getProduct = (product: Product) => async (dispatch: Dispatch) => {
    const { data } = await api.getProduct(product._id);
    dispatch(
        {
            type: GET_PRODUCT,
            payload: data
        }
    );
};

export const createProduct = (productData: Product) => async (dispatch: Dispatch) => {
    const { data } = await api.createProduct(productData);
    dispatch(
        {
            type: CREATE_PRODUCT,
            payload: data
        }
    );
};

export const updateProduct = (productData: Product) => async (dispatch: Dispatch) => {
    const { data } = await api.updateProduct(productData._id, productData);
    dispatch(
        {
            type: UPDATE_PRODUCT,
            payload: data
        }
    );
};

export const deleteProduct = (product: Product) => async (dispatch: Dispatch) => {
    const { data } = await api.deleteProduct(product._id);
    dispatch(
        {
            type: DELETE_PRODUCT,
            payload: data
        }
    );
};