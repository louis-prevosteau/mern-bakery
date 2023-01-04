import { Request, Response } from "express";
import { ScheduleService } from "../services";

const scheduleService = new ScheduleService();

export class ScheduleController {

    async getSchedules(req: Request, res: Response) {
        try {
            const schedules = await scheduleService.getAll();
            res.status(200).json(schedules);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async createSchedule(req: Request, res: Response) {
        const { day, morningOpen, morningClose, afternoonOpen, afternoonClose } = req.body;
        try {
            const schedule = await scheduleService.create({ day, morningOpen, morningClose, afternoonOpen, afternoonClose });
            res.status(201).json(schedule);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updateSchedule(req: Request, res: Response) {
        const { id } = req.params;
        const { day, morningOpen, morningClose, afternoonOpen, afternoonClose } = req.body;
        try {
            const schedule = await scheduleService.update({ _id: id }, { day, morningOpen, morningClose, afternoonOpen, afternoonClose });
            res.status(200).json(schedule);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteSchedule(req: Request, res: Response) {
        const{ id } = req.params;
        try {
            const schedule = await scheduleService.delete({ _id: id });
            res.status(200).json(schedule);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};