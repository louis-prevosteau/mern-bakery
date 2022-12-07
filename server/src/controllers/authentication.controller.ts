import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/default';
import { UserService } from "../services";

const userService = new UserService();

export class AuthenticationController {
    
    async register(req: Request, res: Response) {
        const { username, email, password, role } = req.body;
        try {
            if (!username || !email || !password) return res.status(400).json({ message: 'Veuillez remplir ces champs' });
            const userExist = await userService.getOne({ email });
            if (userExist) return res.status(400).json({ message: 'Utilisateur existant' });
            const user = await userService.create(
                {
                    username,
                    email,
                    password: await bcrypt.hash(password, await bcrypt.genSalt()),
                    role
                }
            );
            const token = jwt.sign(
                { id: user._id },
                `${JWT_SECRET}`
            );
            res.status(201).json({ user, token });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            if (!email || !password) return res.status(400).json({ message: 'Veuillez remplir ces champs' });
            const user = await userService.getOne({ email });
            if (!user) return res.status(400).json({ message: 'Utilisateur inconnu' });
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) return res.status(400).json({ message: 'Identifiants incorrects' });
            const token = jwt.sign(
                { id: user._id },
                `${JWT_SECRET}`
            );
            res.status(200).json({ user, token });
        } catch (error) {
            res.status(500).json(error);
        }
    }
};