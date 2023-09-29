const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  // if(typeof price !== "number")
  if (typeof price !== 'number') {
    return res.status(400).json({ message: "Please enter numbers only in price" });
  }
  const product = new Product(null, title, description, price);
  product.save();
  res.status(201).json({ message: "Record Added Successfully" });
};

exports.getProductById = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) {
      return res.status(404).json("Id not Found")
    }
    res.send(product);
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.params.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedDesc = req.body.description;
  Product.findById(prodId, (product) => {
    if (!product) {
      return res.status(404).json({ message: "Id not Found" });
    }
    const updatedProduct = new Product(
      prodId,
      updatedTitle,
      updatedDesc,
      updatedPrice
    );
    updatedProduct.save();
    res.status(200).json({ message: "Record Updated Successfully" });
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.send(products);
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) {
      return res.status(404).json({message: "Record not Found"})
    }
    Product.deleteById(prodId);
    res.status(200).json({ message: "Record Deleted Successfully" });
  });
};
