const path = require('path');
const express = require('express');

const welcomeController = require('../controllers/products');

const router = express.Router();

//welcome page route
router.get('/',welcomeController.getWelcome);
module.exports = router;