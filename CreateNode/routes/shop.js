// routes/shop.js
const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();

// GET /
router.get('/', productsController.getShop);

module.exports = router;
