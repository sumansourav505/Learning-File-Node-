// controllers/products.js
const path = require('path');

// Display 'add product' page (GET request)
exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
};

// Handle 'add product' form submission (POST request)
exports.postAddProduct = (req, res, next) => {
  console.log(req.body); // Log product details to console
  res.redirect('/');
};

// Display shop page
exports.getShop = (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
};

