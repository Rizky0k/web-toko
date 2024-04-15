const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    note: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date
    }
});

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product