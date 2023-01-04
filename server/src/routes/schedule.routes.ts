import { Router } from "express";
import { ScheduleController } from "../controllers";
import { checkRole, jwtAuth } from "../middlewares";
import { ADMIN } from "../utils/roles";

const router = Router();
const controller = new ScheduleController();

router.get('/', controller.getSchedules);
router.post('/', jwtAuth, checkRole([ADMIN]), controller.createSchedule);
router.put('/:id', jwtAuth, checkRole([ADMIN]), controller.updateSchedule);
router.delete('/:id', jwtAuth, checkRole([ADMIN]), controller.deleteSchedule);

export default router;