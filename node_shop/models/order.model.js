const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, required: true}

});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;