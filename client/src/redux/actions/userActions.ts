import { Dispatch } from "redux";
import * as api from '../../api';
import { GET_PROFILE, UPDATE_PROFILE } from "../../utils/actionTypes";
import { User } from "../../utils/interfaces";

export const getProfile = () => async (dispatch: Dispatch) => {
    const { data } = await api.getProfile();
    dispatch(
        {
            type: GET_PROFILE,
            payload: data
        }
    );
};

export const updateProfile = (profileData: User) => async (dispatch: Dispatch) => {
    const { data } = await api.updateProfile(profileData);
    dispatch(
        {
            type: UPDATE_PROFILE,
            payload: data
        }
    );
};