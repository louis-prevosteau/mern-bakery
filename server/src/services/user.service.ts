import { UserModel } from "../models";

export class UserService {
    
    getAll(filters = {}) {
        const users = UserModel.find(filters);
        return users;
    }

    getOne(filters = {}) {
        const user = UserModel.findOne(filters);
        return user;
    }

    create(data: Object) {
        const user = UserModel.create(data);
        return user;
    }

    update(filters: Object, data: Object) {
        const user = UserModel.findOneAndUpdate(filters, data);
        return user;
    }

    delete(filters: Object) {
        const user = UserModel.findOneAndDelete(filters);
        return user;
    }
};
