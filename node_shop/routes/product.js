const express  = require('express');

const {getProduct, createproduct, updateProduct, deleteProduct} = require('../controllers/productController');

const router = express.Router();

router.get('/', getProduct);
router.post('/', createproduct);
router.patch('/productId', updateProduct);
router.delete('/:productId', deleteProduct);

module.exports = router;