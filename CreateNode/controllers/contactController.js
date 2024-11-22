const path = require('path');

// Controller function to render the contact form page
exports.getContactForm = (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'contactus.html'));
};

// Controller function to handle form submission
exports.postContactForm = (req, res, next) => {
  console.log('Form Data:', req.body);  // Log form data (name and email)
  
  // You could add logic here to process or save the data (e.g., to a database)
  
  res.redirect('/success');  // Redirect to the success page
};

// Controller function to render the success page
exports.getSuccessPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'success.html'));
};
