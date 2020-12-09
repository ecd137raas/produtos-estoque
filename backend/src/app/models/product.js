const mongoose = require('../../database');

const ProductSchema = new mongoose.Schema({
    factoryid: {type: String, require: true, },
    name: {type: String, require: true, },
    description: {type: String, require: true, },
    model: {type: String, require: true, },
    brand: {type: String, require: true, },
    size: {type: String, require: true, },
    color: {type: String, require: true, },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;