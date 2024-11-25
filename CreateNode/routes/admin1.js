const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

// Handle product addition
router.post('/add-product', productsController.postAddProduct);

// Retrieve all products
router.get('/products', productsController.getProducts);

module.exports = router;
