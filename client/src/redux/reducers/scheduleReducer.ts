import { CREATE_SCHEDULE, DELETE_SCHEDULE, GET_SCHEDULES, UPDATE_SCHEDULE } from "../../utils/actionTypes";
import { Action, Schedule } from "../../utils/interfaces";

export const schedulesReducer = (state: Schedule[] = [], action: Action): Schedule[] => {
    switch (action.type) {
        case GET_SCHEDULES:
           return action.payload;
        case CREATE_SCHEDULE:
            return [...state, action.payload];
        case UPDATE_SCHEDULE:
            return state.map((schedule) => schedule._id === action.payload._id ? action.payload : schedule);
        case DELETE_SCHEDULE:
            return state.filter((schedule) => schedule._id !== action.payload._id);    
        default:
            return state;
    }
}