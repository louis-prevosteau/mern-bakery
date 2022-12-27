import { model, Schema } from "mongoose";
import { ADMIN, USER } from "../utils/roles";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: [ADMIN, USER],
            default: USER
        }
    },
    {
        timestamps: true
    }
);

export const UserModel = model('user', UserSchema);