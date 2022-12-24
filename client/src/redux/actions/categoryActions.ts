import { Dispatch } from "redux";
import * as api from '../../api';
import { CREATE_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES, UPDATE_CATEGORY } from "../../utils/actionTypes";
import { Category } from "../../utils/interfaces";

export const getCategories = () => async (dispatch: Dispatch) => {
    const { data } = await api.getCategories();
    dispatch(
        {
            type: GET_CATEGORIES,
            payload: data
        }
    );
};

export const createCategory = (categoryData: Category) => async (dispatch: Dispatch) => {
    const { data } = await api.createCategory(categoryData);
    dispatch(
        {
            type: CREATE_CATEGORY,
            payload: data
        }
    );
};

export const updateCategory = (categoryData: Category) => async (dispatch: Dispatch) => {
    const { data } = await api.updateCategory(categoryData._id, categoryData);
    dispatch(
        {
            type: UPDATE_CATEGORY,
            payload: data
        }
    );
};

export const deleteCategory = (id: any) => async (dispatch: Dispatch) => {
    const { data } = await api.deleteCategory(id);
    dispatch(
        {
            type: DELETE_CATEGORY,
            payload: data
        }
    );
};