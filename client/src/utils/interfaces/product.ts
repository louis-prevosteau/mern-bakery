import { Category } from "./category";
import { User } from "./user";

export interface Product {
    _id?: any;
    name?: string;
    image?: any;
    price?: number;
    category?: Category;
    createdAt?: string;
    updatedAt?: string;
};