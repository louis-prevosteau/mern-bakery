import { AUTH, LOGOUT } from "../../utils/actionTypes";
import { Action, User } from "../../utils/interfaces";

export const authenticationReducer = (state: User = {}, action: Action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
            return action.payload.user;
        case LOGOUT:
            localStorage.clear();
            return null;
        default:
            return state;
    }
};