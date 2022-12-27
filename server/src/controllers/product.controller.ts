import { Request, Response } from "express";
import fs from 'fs';
import { ProductService, UserService } from "../services";

const productService = new ProductService();
const userService = new UserService();

export class ProductController {

    async getProducts(req: Request, res: Response) {
        const { category } = req.query;
        try {
            let products = null;
            if (category) products = await productService.getAll({ category }).populate('category');
            else products = await productService.getAll().populate('category');
            res.status(200).json(products);
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
        const { name, image, price, category } = req.body;
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
        const { name, image, price, category } = req.body;
        try {
            const product = await productService.update(
                { _id: id },
                {
                    name,
                    image,
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
};