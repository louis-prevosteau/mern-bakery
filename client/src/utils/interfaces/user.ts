import { Product } from "./product";

export interface User {
    _id?: any;
    username?: string;
    email?: string;
    role?: string;
    createdAt?: string;
    updatedAt?: string;
};

export interface UserRegister {
    username: string;
    email: string;
    password: string;
};

export interface UserLogin {
    email: string;
    password: string;
};