const fs = require('fs');
const path = require('path');

// const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');  // File to store data

// class Product {
//   constructor(title) {
//     this.title = title;
//   }

//   save() {
//     fs.readFile(productsFilePath, (err, data) => {
//       let products = [];
//       if (!err && data) {
//         try{
//           products=JSON.parse(data);
//         }
//         catch(err){
//           console.error(err);
//         }
//       }
//       else if(err && err.code!=='ENOENT'){
//         console.log(err);
//         return;

//       }
//       products.push(this);  // Add new product to the array
//       fs.writeFile(productsFilePath, JSON.stringify(products,null,2), (err) => {
//         if (err) console.log(err);
//       });
//     });
//   }

//   static fetchAll(callback) {
//     fs.readFile(productsFilePath, (err, data) => {
//       if (err) {
//         if(err.code==='ENOENT'){
//           callback([]);
//         }
//         else{
//           console.error(err);
//           callback([]);
//         }
//       } else {
//         try{
//           const products=JSON.parse(data);
          // callback(products);
//         }
        // catch(err){
          // console.error(err);
          // callback([]);
//         }
//       }
//     });
//   }
// }
const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return new Promise((resolve, reject) => {
      if (products) {
        resolve(products);
      } else {
        reject(new Error('No products found'));
      }
    });
  }
};
