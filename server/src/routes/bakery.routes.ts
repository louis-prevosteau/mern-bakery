import { Router } from "express";
import { BakeryController } from "../controllers";
import { checkRole, jwtAuth } from "../middlewares";
import { ADMIN } from "../utils/roles";

const router = Router();
const controller = new BakeryController();

router.get('/', controller.getBakeries);
router.post('/', jwtAuth, checkRole([ADMIN]), controller.createBakery);
router.put('/:id', jwtAuth, checkRole([ADMIN]), controller.updateBakery);
router.post('/:id', jwtAuth, checkRole([ADMIN]), controller.deleteBakery);

export default router;