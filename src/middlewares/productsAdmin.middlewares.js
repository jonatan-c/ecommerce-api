const ProductsDB = require("../models/Products.model");

const hasProduct = async (req, res, next) => {
  const product = await ProductsDB.findAll();
  if (!product.length === 0) {
    return res.status(200).json({
      message: "No hay productos en la base de datos",
    });
  }
  next();
};

const isProductInDB = async (req, res, next) => {
  const { id } = req.params;
  const result = await ProductsDB.findByPk(id);
  if (!result) {
    return res.status(200).json({
      message: "Product not found, please check the id",
    });
  }
  next();
};

module.exports = {
  hasProduct,
  isProductInDB,
};
