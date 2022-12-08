import { Router } from "express";
import path from 'path';
import multer from 'multer';
import { ProductController } from "../controllers";
import { checkRole, jwtAuth } from "../middlewares";
import { ADMIN } from "../utils/roles";

const router = Router();
const controller = new ProductController();

const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, '../client/public/uploads/products');
        },
        filename: (req, file, cb) => {
            cb(null, path.basename(file.originalname));
        },
    }
);

const upload = multer({ storage });

router.get('/', controller.getProducts);
router.post('/', jwtAuth, checkRole([ADMIN]), upload.single('image'), controller.createProduct);
router.put('/:id', jwtAuth, checkRole([ADMIN]), controller.updateProduct);
router.put('/:id/like', jwtAuth, controller.like);
router.put('/:id/like', jwtAuth, controller.unlike);
router.delete('/:id', jwtAuth, checkRole([ADMIN]), controller.deleteProduct);

export default router;