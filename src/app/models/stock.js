const mongoose = require('../../database');

const StockSchema = new mongoose.Schema({
    factoryid: {type: String, require: true, },
    qty: {type: Number, require: true, },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

const Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;