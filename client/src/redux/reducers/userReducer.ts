import { GET_PROFILE } from "../../utils/actionTypes";
import { Action } from "../../utils/interfaces";

export const profileReducer = (state = null, action: Action) => {
    switch (action.type) {
        case GET_PROFILE:
            return action.payload;
    
        default:
            return state;
    }
};