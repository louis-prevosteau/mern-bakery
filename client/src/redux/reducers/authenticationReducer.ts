import { AUTH, LOGOUT } from "../../utils/actionTypes";
import { Action } from "../../utils/interfaces";

export const authenticationReducer = (state = { profile: null }, action: Action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
            return {
                ...state,
                profile: action.payload.user,
            };
        case LOGOUT:
            localStorage.clear();
            return {
                ...state,
                profile: null
            };
        default:
            return state;
    }
};