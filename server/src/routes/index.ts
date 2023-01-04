import { Router } from "express";
import AuthenticationRoutes from './authentication.routes';
import BakeryRoutes from './bakery.routes';
import CategoryRoutes from './category.routes';
import ProductRoutes from './product.routes';
import ScheduleRoutes from './schedule.routes';
import UserRoutes from './user.routes';

const router = Router();

router.use('/auth', AuthenticationRoutes);
router.use('/bakery', BakeryRoutes);
router.use('/category', CategoryRoutes);
router.use('/product', ProductRoutes);
router.use('/schedule', ScheduleRoutes);
router.use('/user', UserRoutes);

export default router;