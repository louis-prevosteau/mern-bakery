import { CREATE_BAKERY, DELETE_BAKERY, GET_BAKERIES, UPDATE_BAKERY } from "../../utils/actionTypes";
import { Action, Bakery } from "../../utils/interfaces";

export const bakeriesReducer = (state: Bakery[] = [], action: Action): Bakery[] => {
    switch (action.type) {
        case GET_BAKERIES:
            return action.payload;
        case CREATE_BAKERY:
            return [...state, action.payload];
        case UPDATE_BAKERY:
            return state.map((bakery) => bakery._id === action.payload._id ? action.payload : bakery);
        case DELETE_BAKERY:
            return state.filter((bakery) => bakery._id !== action.payload._id);
        default:
            return state;
    }
};