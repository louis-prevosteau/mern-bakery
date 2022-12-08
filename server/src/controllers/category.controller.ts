import { Request, Response } from "express";
import { CategoryService } from "../services";

const categoryService = new CategoryService();

export class CategoryController {

    async getCategories(req: Request, res: Response) {
        try {
            const categories = await categoryService.getAll();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async createCategory(req: Request, res: Response) {
        const { name } = req.body;
        try {
            if (!name) return res.status(400).json({ message: 'Veuillez remplir ces champs' });
            const category = await categoryService.create({ name });
            res.status(201).json(category);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updateCategory(req: Request, res: Response) {
        const { id } = req.params;
        const { name } = req.body;
        try {
            if (!name) return res.status(400).json({ message: 'Veuillez remplir ces champs' });
            const category = await categoryService.update({ _id: id }, { name });
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteCategory(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const category = await categoryService.delete({ _id: id });
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};