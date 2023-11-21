const Product = require('../models/product.model');

const getProduct = ('/', (req, res, next) => {
    res.status(200).json({
       message: "product get"
    })
});
const createproduct = ((req, res, next) => {
   res.status(201).json({
       message: "cerated product"
   })
});
const updateProduct = ((req, res, next) => {
    const id = req.params.productId;
   res.json({
       message: "product updated",
       id: id
   })
});

const deleteProduct = ((req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
       message: "product deleted",
       id: id
   })
});

module.exports = {getProduct, createproduct, updateProduct, deleteProduct}