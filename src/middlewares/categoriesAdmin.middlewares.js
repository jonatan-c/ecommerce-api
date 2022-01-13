const CategoryDB = require("../models/category.model");

async function existCategoriesInDB(req, res, next) {
  const categories = await CategoryDB.findAll();
  if (categories.length == 0) {
    return res.status(404).json({
      message: "No existen categorias en la base de datos",
    });
  }
  next();
}

module.exports = { existCategoriesInDB };
