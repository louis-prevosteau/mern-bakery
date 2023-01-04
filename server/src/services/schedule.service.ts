import { ScheduleModel } from "../models";

export class ScheduleService {

    getAll(filters = {}) {
        const schedules = ScheduleModel.find(filters);
        return schedules;
    }

    create(data: Object) {
        const schedule = ScheduleModel.create(data);
        return schedule;
    }

    update(filters: Object, data: Object) {
        const schedule = ScheduleModel.findOneAndUpdate(filters, data);
        return schedule;
    }

    delete(filters: Object) {
        const schedule = ScheduleModel.findOneAndDelete(filters);
        return schedule;
    }
};