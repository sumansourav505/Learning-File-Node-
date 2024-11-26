const path = require('path');
const express = require('express');

const errorController = require('../controllers/error');

const router = express.Router();

//error page for undefined route
router.use(errorController.get404);
module.exports = router;