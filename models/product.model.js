const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSequence = require('mongoose-sequence');

const ProductSchema = new Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter product name"]
        },
        type:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
            default: 0
        },
        rating:{
            type: Number,
            required: true,
            default: 0
        },
        warranty_years:{
            type: Number,
            required: true,
            default: 0
        },
        available:{
            type: Boolean,
            required: true,
            default: true
        }
    },
    {
        timestamps: true,
    }
);

ProductSchema.plugin(mongooseSequence(mongoose),{ inc_field:'id'})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;