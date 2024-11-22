const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');  // File to store data

class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    fs.readFile(productsFilePath, (err, data) => {
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }
      products.push(this);  // Add new product to the array
      fs.writeFile(productsFilePath, JSON.stringify(products), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(productsFilePath, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));   // Pass parsed data to the callback
      }
    });
  }
}

module.exports = Product;
