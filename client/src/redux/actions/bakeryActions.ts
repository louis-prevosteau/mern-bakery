import { Dispatch } from "redux";
import * as api from '../../api';
import { CREATE_BAKERY, DELETE_BAKERY, GET_BAKERIES, UPDATE_BAKERY } from "../../utils/actionTypes";
import { Bakery } from "../../utils/interfaces";

export const getBakeries = () => async (dispatch: Dispatch) => {
    const { data } = await api.getBakeries();
    dispatch(
        {
            type: GET_BAKERIES,
            payload: data
        }
    );
};

export const createBakery = (bakeryData: Bakery) => async (dispatch: Dispatch) => {
    const { data } = await api.createBakery(bakeryData);
    dispatch(
        {
            type: CREATE_BAKERY,
            payload: data
        }
    );
};

export const updateBakery = (bakeryData: Bakery) => async (dispatch: Dispatch) => {
    const { data } = await api.updateBakery(bakeryData._id, bakeryData);
    dispatch(
        {
            type: UPDATE_BAKERY,
            payload: data
        }
    );
};

export const deleteBakery = (id: any) => async (dispatch: Dispatch) => {
    const { data } = await api.deleteBakery(id);
    dispatch(
        {
            type: DELETE_BAKERY,
            payload: data
        }
    );
};