const ProductsDB = require("../models/Products.model");

async function getAllProducts(req, res) {
  try {
    const products = await ProductsDB.findAll();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
}

async function getProductById(req, res) {
  try {
    const product = await ProductsDB.findByPk(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
}

async function createProduct(req, res) {
  try {
    const product = await ProductsDB.create({
      name_product: req.body.name_product,
      price_product: req.body.price_product,
      description_product: req.body.description_product,
      stock_product: req.body.stock_product,
      // image_product: req.body.image_product,
      category_product: req.body.category_product,
    });

    res.status(201).json("Product created");
  } catch (error) {
    console.log(error);
  }
}

async function updateProduct(req, res) {
  try {
    const product = await ProductsDB.update(
      {
        name_product: req.body.name_product,
        price_product: req.body.price_product,
        description_product: req.body.description_product,
        stock_product: req.body.stock_product,
        // image_product: req.body.image_product,
        category_product: req.body.category_product,
      },
      {
        where: {
          id_product: req.params.id,
        },
      }
    );
    res.status(200).json("Product updated");
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct(req, res) {
  try {
    const product = await ProductsDB.destroy({
      where: {
        id_product: req.params.id,
      },
    });
    res.status(200).json("Product deleted");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};