const { Op } = require("sequelize");
const ProductsDB = require("../models/Products.model");
const CategoryDB = require("../models/Categories.model");

const hasProductInDB = async (req, res, next) => {
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
    return res.status(404).json({
      message: "Product not found, please check the id",
    });
  }
  next();
};

const isNameProductInDB = async (req, res, next) => {
  // de base de datos
  const { name_product } = req.body;
  const result = await ProductsDB.findOne({
    where: {
      name_product: {
        [Op.like]: `%${name_product}%`,
      },
    },
  });
  if (result) {
    return res.status(200).json({
      message: "Product already exists, change the name",
    });
  }
  next();
};

async function isCategoryIdDB(req, res, next) {
  const { id_category } = req.body;
  const result = await CategoryDB.findByPk(id_category);
  if (!result) {
    return res.status(404).json({
      message: "Category not found, please check the id",
    });
  }
  next();
}

module.exports = {
  hasProductInDB,
  isProductInDB,
  isNameProductInDB,
  isCategoryIdDB,
};
