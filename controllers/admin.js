const Product = require('../models/product');


exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title,  description, price);
  product.save();
  res.sendStatus(200)
};

exports.getEditProduct = (req, res, next) => {
 
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.send("Product Not Found")
    }
    res.send(product)
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.params.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save();
  res.status(200).send(updatedProduct)
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.send(products)
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.deleteById(prodId);
  res.sendStatus(200)
};
