import { GET_PROFILE, UPDATE_PROFILE } from "../../utils/actionTypes";
import { Action, User } from "../../utils/interfaces";

export const profileReducer = (state: User = {}, action: Action): User => {
    switch (action.type) {
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return action.payload;
        default:
            return state;
    }
};