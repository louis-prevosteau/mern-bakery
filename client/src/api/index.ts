import axios from "axios";
import { API_URL } from "../config/default";
import { Category, Product, ProductLike, User, UserLogin, UserRegister } from "../utils/interfaces";

const api = axios.create(
    {
        baseURL: API_URL
    }
);

api.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) req.headers!.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile') as string).token}`
    return req;
});

export const register = (data: UserRegister) => api.post('auth/register', data);
export const login = (data: UserLogin) => api.post('auth/login', data);

export const getCategories = () => api.get('category');
export const createCategory = (data: Category) => api.post('category', data);
export const updateCategory = (id: any, data: Category) => api.put(`category/${id}`, data);
export const deleteCategory = (id: any) => api.delete(`category/${id}`);

export const getProducts = () => api.get('product');
export const getProductsByCategory = (category: Category) => api.get(`product?category=${category}`);
export const getProduct = (id: any) => api.get(`product/${id}`);
export const createProduct = (data: Product) => api.post('product', data);
export const updateProduct = (id: any, data: Product) => api.put(`product/${id}`, data);
export const likeProduct = (id: any, data: ProductLike) => api.put(`product/${id}/like`, data);
export const unlikeProduct = (id: any, data: ProductLike) => api.put(`product/${id}/unlike`, data);
export const deleteProduct = (id: any) => api.delete(`product/${id}`);

export const getProfile = () => api.get('user/profile');
export const updateProfile = (data: User) => api.put('user/profile', data);