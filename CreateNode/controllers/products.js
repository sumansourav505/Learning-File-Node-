// controllers/products.js
const Product = require('../models/product');  // Ensure correct import
const path = require('path');

// Display 'add product' page (GET request)
exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
};

// Handle 'add product' form submission (POST request)
exports.postAddProduct = (req, res, next) => {
  const productTitle = req.body.title;  // Assuming form field name is 'title'
  const newProduct = new Product(productTitle);  // Create a new product instance
  newProduct.save();  // Save the product using the model's method
  res.redirect('/');  // Redirect to home/shop page
};

// Display shop page (GET request)
exports.getShop = (req, res, next) => {
  Product.fetchAll((products) => {   // Retrieve all products
    res.render('shop', {              // Ensure 'shop.html' is set up with templating
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};
