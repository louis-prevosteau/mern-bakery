import { Router } from "express";
import { CategoryController } from "../controllers";
import { checkRole, jwtAuth } from "../middlewares";
import { ADMIN } from "../utils/roles";

const router = Router();
const controller = new CategoryController();

router.get('/', controller.getCategories);
router.post('/', jwtAuth, checkRole([ADMIN]), controller.createCategory);
router.put('/:id', jwtAuth, checkRole([ADMIN]), controller.updateCategory);
router.delete('/:id', jwtAuth, checkRole([ADMIN]), controller.deleteCategory);

export default router;