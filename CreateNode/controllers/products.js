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
    
  });
  // Use the template or inline HTML to dynamically show the products
  // let productList = products.map(p => `<li>${p.title}</li>`).join('');
  
  // res.send(`
  //   <!DOCTYPE html>
  //   <html lang="en">
  //   <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <title>Shop</title>
  //     <link rel="stylesheet" href="/css/main.css">
  //   </head>
  //   <body>
  //     <header class="main-header">
  //       <nav class="main-header-nav">
  //         <ul class="main-header-item-list">
  //           <li class="main-header-item"><a class="active" href="/">Shop</a></li>
  //           <li class="main-header-item"><a href="/admin/add-product">Add Product</a></li>
  //           <li class="main-header-item"><a href="/contact/contactus">Contact Us</a></li>
  //         </ul>
  //       </nav>
  //     </header>
  //     <main>
  //       <h1>My Products</h1>
  //       <p>List of all Products:</p>
  //       <ul style="list-style-type: none; padding: 0;">
  //         ${productList}
  //       </ul>
  //     </main>
  //   </body>
  //   </html>
  // `);
};
