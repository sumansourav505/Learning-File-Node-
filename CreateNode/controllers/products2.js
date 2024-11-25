const path = require('path');
const Product=require('../models/product');
// Controller for rendering the welcome page
exports.getWelcome = (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'welcome.html'));
};

// Controller for the add product page
exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res, next) => {
  const product=new Product(req.body.title);
  product.save();
  res.redirect('/shop');
};

// Controller for the products page
exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  const products= Product.fetchAll();

};
