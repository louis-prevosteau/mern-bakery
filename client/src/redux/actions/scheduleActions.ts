import { Dispatch } from "redux";
import * as api from '../../api';
import { CREATE_SCHEDULE, DELETE_SCHEDULE, GET_SCHEDULES, UPDATE_SCHEDULE } from "../../utils/actionTypes";
import { Schedule } from "../../utils/interfaces";

export const getSchedules = () => async (dispatch: Dispatch) => {
    const { data } = await api.getSchedules();
    dispatch(
        {
            type: GET_SCHEDULES,
            payload: data
        }
    );
};

export const createSchedule = (scheduleData: Schedule) => async (dispatch: Dispatch) => {
    const { data } = await api.createSchedule(scheduleData);
    dispatch(
        {
            type: CREATE_SCHEDULE,
            payload: data
        }
    );
};

export const updateSchedule = (id: any, scheduleData: Schedule) => async (dispatch: Dispatch) => {
    const { data } = await api.updateSchedule(id, scheduleData);
    dispatch(
        {
            type: UPDATE_SCHEDULE,
            payload: data
        }
    );
};

export const deleteSchedule = (id: any) => async (dispatch: Dispatch) => {
    const { data } = await api.deleteSchedule(id);
    dispatch(
        {
            type: DELETE_SCHEDULE,
            payload: data
        }
    );
};