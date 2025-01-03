const fs = require('fs');
const path = require('path');
const p=path.join(__dirname,'..','data','products.json');
 const getProductsFromFile=(cb)=>{
  fs.readFile(p,(err,fileContent)=>{
    if(err){
      cb([]);
    }else{
      cb(JSON.parse(fileContent));
    }
  });
 }
module.exports = class Product {
  constructor(title,imageUrl,description,price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = title;
  }
  save() {
    getProductsFromFile(products=>{
      products.push(this);
      fs.writeFile(p,JSON.stringify(products),(err)=>{
        if(err){
          console.log(err);
        }
      });
    })
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
