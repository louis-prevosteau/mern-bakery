import { Dispatch } from "redux";
import * as api from '../../api';
import { AUTH, LOGOUT } from "../../utils/actionTypes";
import { UserLogin, UserRegister } from "../../utils/interfaces";

export const register = (registerData: UserRegister) => async (dispatch: Dispatch) => {
    const { data } = await api.register(registerData);
    dispatch(
        {
            type: AUTH,
            payload: data
        }
    );
};

export const login = (loginData: UserLogin) => async (dispatch: Dispatch) => {
    const { data } = await api.login(loginData);
    dispatch(
        {
            type: AUTH,
            payload: data
        }
    );
};

export const logout = () => (dispatch: Dispatch) => {
    dispatch(
        {
            type: LOGOUT
        }
    );
};