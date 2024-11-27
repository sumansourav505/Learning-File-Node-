const path = require('path');
const Product = require('../models/product');

// Controller for rendering the welcome page
exports.getWelcome = (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'welcome.html'));
};

// Controller for the add product page
exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
};

// Handle adding a product
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/shop');
};

// Controller for rendering the products page
exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  });
};
