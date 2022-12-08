import { Router } from "express";
import { UserController } from "../controllers";
import { jwtAuth } from "../middlewares";

const router = Router();
const controller = new UserController();

router.get('/profile', jwtAuth, controller.getProfile);
router.put('/profile', jwtAuth, controller.updateProfile);

export default router;