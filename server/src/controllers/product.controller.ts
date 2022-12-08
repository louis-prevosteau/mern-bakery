import { Request, Response } from "express";
import { ProductService, UserService } from "../services";

const productService = new ProductService();
const userService = new UserService();

export class ProductController {

    async getProducts(req: Request, res: Response) {
        const { category } = req.query;
        try {
            let products;
            if (category) products = await productService.getAll({ category }).populate('category');
            else products = await productService.getAll().populate('category');
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const product = await productService.getOne({ _id: id }).populate('category');
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async createProduct(req: Request, res: Response) {
        const { name, price, category } = req.body;
        const image = req.file?.filename;
        try {
            if (!name || !category) return res.status(400).json({ message: 'Veuillez remplir ces champs' });
            const product = await productService.create(
                {
                    name,
                    price,
                    category,
                    image
                }
            );
            res.status(201).json(product);
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    }

    async updateProduct(req: Request, res: Response) {
        const { id } = req.params;
        const { name, price, category } = req.body;
        try {
            if (!name || !category) return res.status(400).json({ message: 'Veuillez remplir ces champs' });
            const product = await productService.update(
                { _id: id },
                {
                    name,
                    price,
                    category
                }
            );
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const product = await productService.delete({ _id: id });
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async like(req: Request, res: Response) {
        const { id } = req.params;
        const { like } = req.body;
        try {
            const product = await productService.update(
                { _id: id },
                { $push: { likes: like } }
            );
            userService.update(
                { _id: like },
                { $push: { likes: product?._id } }
            )
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async unlike(req: Request, res: Response) {
        const { id } = req.params;
        const { like } = req.body;
        try {
            const product = await productService.update(
                { _id: id },
                { $pull: { likes: like } }
            );
            userService.update(
                { _id: like },
                { $pull: { likes: product?._id } }
            )
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error);
        }
    }
};