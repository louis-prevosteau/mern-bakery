import { Category } from "./category";
import { User } from "./user";

export interface Product {
    _id?: any;
    name?: string;
    image?: string;
    price?: number;
    category?: Category;
    likes?: User[];
    createdAt?: string;
    updatedAt?: string;
};

export interface ProductLike {
    like: any
};