const Order = require('../models/order.model');



const getOrder = ((req, res, next) => {
    res.status(200).json({
       message: "product get"
    })
});
const createOrder = ((req, res, next) => {
   res.status(201).json({
       message: "cerated product"
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
