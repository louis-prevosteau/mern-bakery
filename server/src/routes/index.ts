import { Router } from "express";
import AuthenticationRoutes from './authentication.routes';
import CategoryRoutes from './category.routes';
import ProductRoutes from './product.routes';
import UserRoutes from './user.routes';

const router = Router();

router.use('/auth', AuthenticationRoutes);
router.use('/category', CategoryRoutes);
router.use('/product', ProductRoutes);
router.use('/user', UserRoutes);

export default router;