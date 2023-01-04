import { model, Schema } from "mongoose";

const ScheduleSchema = new Schema(
    {
        day: {
            type: String
        },
        morningOpen: {
            type: String
        },
        morningClose: {
            type: String
        },
        afternoonOpen: {
            type: String
        },
        afternoonClose: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

export const ScheduleModel = model('schedule', ScheduleSchema);