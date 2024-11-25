const path = require('path');

// Display the contact form page
exports.getContactForm = (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'contactus.html'));
};

// Handle contact form submission
exports.postContactForm = (req, res, next) => {
  console.log('Form Data:', req.body);  // Log form data (name and email)
  res.redirect('/contact/success');  // Redirect to the success page
};

// display  success page
exports.getSuccessPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'success.html'));
};
