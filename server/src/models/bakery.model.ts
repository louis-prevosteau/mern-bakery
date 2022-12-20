import { model, Schema } from "mongoose";

const BakerySchema = new Schema(
    {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const BakeryModel = model('bakery', BakerySchema);