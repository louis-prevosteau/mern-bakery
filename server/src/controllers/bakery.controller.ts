import { Request, Response } from "express";
import { BakeryService } from "../services";

const bakeryService = new BakeryService();

export class BakeryController {

    async getBakeries(req: Request, res: Response) {
        try {
            const bakeries = await bakeryService.getAll();
            res.status(200).json(bakeries);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async createBakery(req: Request, res: Response) {
        const { address, city, zipcode, country, phone, infos } = req.body;
        try {
            if (!address || !city || !zipcode || !country || !phone || !infos) return res.status(400).json({ message: 'Veuillez remplir ces champs' });
            const bakery = await bakeryService.create({ address, city, zipcode, country, phone, infos });
            res.status(201).json(bakery);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updateBakery(req: Request, res: Response) {
        const { id } = req.params;
        const { address, city, zipcode, country, phone, infos } = req.body;
        try {
            const bakery = await bakeryService.update({ _id: id }, { address, city, zipcode, country, phone, infos });
            res.status(200).json(bakery);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteBakery(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const bakery = await bakeryService.delete({ _id: id });
            res.status(200).json(bakery);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};