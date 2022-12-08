import { NextFunction, Response } from "express";

export const checkRole = (roles: string[]) => {
    return (req: any, res: Response, next: NextFunction) => {
        const hasRole = roles.find((role) => req.user.role === role);
        if (!hasRole) return res.status(403).json({ message: 'Not allowed' });
        return next();
    };
};