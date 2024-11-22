const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Display the contact form (GET request)
router.get('/contactus', contactController.getContactForm);

// Handle contact form submission (POST request)
router.post('/contactus', contactController.postContactForm);

// Display success message
router.get('/success', contactController.getSuccessPage);

module.exports = router;
