const express  = require('express');

const {getOrder, createOrder, updateOrder, deleteOrder} = require('../controllers/orderController');

const router = express.Router();

router.get('/', getOrder);
router.post('/', createOrder);
router.patch('/:orderId', updateOrder);
router.delete('/:orderId', deleteOrder);

module.exports = router;