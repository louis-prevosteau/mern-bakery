import { CategoryModel } from '../models';

export class CategoryService {
    
    getAll(filters = {}) {
        const categories = CategoryModel.find(filters);
        return categories;
    }

    getOne(filters = {}) {
        const category = CategoryModel.findOne(filters);
        return category;
    }

    create(data: Object) {
        const category = CategoryModel.create(data);
        return category;
    }

    update(filters: Object, data: Object) {
        const category = CategoryModel.findOneAndUpdate(filters, data);
        return category;
    }

    delete(filters: Object) {
        const category = CategoryModel.findOneAndDelete(filters);
        return category;
    }
};
