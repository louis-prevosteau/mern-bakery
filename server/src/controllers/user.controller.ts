import { Response } from "express";
import { UserService } from "../services";

const userService = new UserService();

export class UserController {

    async getProfile(req: any, res: Response) {
        try {
            const user = await userService.getOne({ _id: req.user._id })
                                        .select('-password');
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updateProfile(req: any, res: Response) {
        const { username, email } = req.body;
        try {
            const user = await userService.update(
                { _id: req.user._id },
                {
                    username,
                    email
                }
            );
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};