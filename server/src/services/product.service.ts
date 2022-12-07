import { ProductModel } from "../models";

export class ProductService {
    
    getAll(filters = {}) {
        const products = ProductModel.find(filters);
        return products;
    }

    getOne(filters = {}) {
        const product = ProductModel.findOne(filters);
        return product;
    }

    create(data: Object) {
        const product = ProductModel.create(data);
        return product;
    }

    update(filters: Object, data: Object) {
        const product = ProductModel.findOneAndUpdate(filters, data);
        return product;
    }

    delete(filters: Object) {
        const product = ProductModel.findOneAndDelete(filters);
        return product;
    }
};
