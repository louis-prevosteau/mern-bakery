import { model, Schema } from "mongoose";

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        price: {
            type: Number
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'category',
            required: true
        },
        likes: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'user'
                }
            ],
            default: []
        }
    },
    {
        timestamps: true
    }
);

export const ProductModel = model('product', ProductSchema);