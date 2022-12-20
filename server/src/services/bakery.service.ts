import { BakeryModel } from '../models';

export class BakeryService {
    
    getAll(filters = {}) {
        const bakeries = BakeryModel.find(filters);
        return bakeries;
    }

    getOne(filters = {}) {
        const bakery = BakeryModel.findOne(filters);
        return bakery;
    }

    create(data: Object) {
        const bakery = BakeryModel.create(data);
        return bakery;
    }

    update(filters: Object, data: Object) {
        const bakery = BakeryModel.findOneAndUpdate(filters, data);
        return bakery;
    }

    delete(filters: Object) {
        const bakery = BakeryModel.findOneAndDelete(filters);
        return bakery;
    }
};
