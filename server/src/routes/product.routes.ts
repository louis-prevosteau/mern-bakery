import { Router } from "express";
import path from 'path';
import { ProductController } from "../controllers";
import { checkRole, jwtAuth } from "../middlewares";
import { ADMIN } from "../utils/roles";

const router = Router();
const controller = new ProductController();

router.get('/', controller.getProducts);
router.post('/', jwtAuth, checkRole([ADMIN]), controller.createProduct);
router.get('/:id', controller.getProduct);
router.put('/:id', jwtAuth, checkRole([ADMIN]), controller.updateProduct);
router.put('/:id/like', jwtAuth, controller.like);
router.put('/:id/unlike', jwtAuth, controller.unlike);
router.delete('/:id', jwtAuth, checkRole([ADMIN]), controller.deleteProduct);

export default router;