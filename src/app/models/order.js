const mongoose = require('../../database');

const OrderSchema = new mongoose.Schema({
    idorder: {type: String, require: true, },
    value: {type: Number, require: true, },
    discount:  {type: Number, require: true, },
    paymentstatus: {type: String, require: true, },
    paymenttype: {type: String, require: true, },
    value: {type: Number, require: true, },
    items: {type: Array, require: true, },
    transport: {type: String, require: true, },
    freight:  {type: Number, require: true, },
    zipcode:  {type: String, require: true, },
    address:  {type: String, require: true, },
    
    createAt: {
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;