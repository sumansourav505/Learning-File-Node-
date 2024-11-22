const path = require('path');
const express = require('express');
const router = express.Router();

// Display the contact form (GET request)
router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
});

// Handle contact form submission (POST request)
router.post('/contactus', (req, res, next) => {
  console.log(req.body);  // Logs the submitted name and email
  res.redirect('/success');
});

// Display success message
router.get('/success', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'success.html'));
});

module.exports = router;
