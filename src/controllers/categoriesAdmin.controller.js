const CategoryDB = require("../models/category.model");

async function getCategories(req, res) {
  try {
    const categories = await CategoryDB.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las categorias",
      error,
    });
  }
}

module.exports = { getCategories };
