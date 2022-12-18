import { GET_PROFILE } from "../../utils/actionTypes";
import { Action, User } from "../../utils/interfaces";

export const profileReducer = (state: User = {}, action: Action) => {
    switch (action.type) {
        case GET_PROFILE:
            return action.payload;
    
        default:
            return state;
    }
};