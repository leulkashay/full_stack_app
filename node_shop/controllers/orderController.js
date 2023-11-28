const mongoose = require('mongoose');
const Order = require('../models/order.model');

const getOrder = ((req, res, next) => {
    const order = Order.find({});

    res.status(200).json({
       message: "product get",
       order: order
    })
});
const createOrder = ((req, res, next) => {
    const order = new Order({
        name: req.body.name,
        quantity: req.body.quantity
    })
    
    order
    .save()
    .then((res)=> console.log(res))
    .catch((error) => console.log(error.message))

    res.status(201).json({
       message: "cerated product",
       order: order

   })
});
const updateOrder = ((req, res, next) => {
    const id = req.params.productId;
   res.json({
       message: "product updated",
       id: id
   })
});

const deleteOrder = ((req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
       message: "product deleted",
       id: id
   })
});

module.exports = {getOrder, createOrder, updateOrder, deleteOrder}
