import axios from "axios";
import { API_URL } from "../config/default";
import { Bakery, Category, Product, Schedule, User, UserLogin, UserRegister } from "../utils/interfaces";

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
export const deleteProduct = (id: any) => api.delete(`product/${id}`);

export const getProfile = () => api.get('user/profile');
export const updateProfile = (data: User) => api.put('user/profile', data);

export const getBakeries = () => api.get('bakery');
export const createBakery = (data: Bakery) => api.post('bakery', data);
export const updateBakery = (id: any, data: Bakery) => api.put(`bakery/${id}`, data);
export const deleteBakery = (id: any) => api.delete(`bakery/${id}`);

export const getSchedules = () => api.get('schedule');
export const createSchedule = (data: Schedule) => api.post('schedule', data);
export const updateSchedule = (id: any, data: Schedule) => api.put(`schedule/${id}`, data);
export const deleteSchedule = (id: any) => api.delete(`schedule/${id}`);