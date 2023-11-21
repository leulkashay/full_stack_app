const express = require('express');

const Product = require('../models/product.model');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
       message: "product get"
    })
});
router.post('/', (req, res, next) => {
   res.status(201).json({
       message: "cerated product"
   })
});
router.patch('/', (req, res, next) => {
   res.json({
       message: "product updated"
   })
});
router.delete('/', (req, res, next) => {
   res.status(200).json({
       message: "product deleted"
   })
});

module.exports = router;