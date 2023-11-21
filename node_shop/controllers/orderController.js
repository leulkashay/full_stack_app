const express = require('express');

const Order = require('../models/order.model');

const router = express.Router();

router.get('/', (req, res, next) => {
     res.status(200).json({
        message: "order get"
     })
});
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "cerated order"
    })
});
router.patch('/', (req, res, next) => {
    res.json({
        message: "order updated"
    })
});
router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: "order deleted"
    })
});

module.exports = router;
