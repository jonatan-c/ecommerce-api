const { Op } = require("sequelize");
const CategoryDB = require("../models/Categories.model");

async function existCategoriesInDB(req, res, next) {
  const categories = await CategoryDB.findAll();
  if (categories.length == 0) {
    return res.status(404).json({
      message: "No existen categorias en la base de datos",
    });
  }
  next();
}

async function isNameCategoryInDB(req, res, next) {
  const { name_category } = req.body;
  const category = await CategoryDB.findOne({
    where: {
      name_category: {
        [Op.eq]: name_category,
      },
    },
  });

  if (category) {
    return res.status(400).json({
      message: "La categoria ya existe en la base de datos",
    });
  }
  next();
}

async function isCategoryIdInDB(req, res, next) {
  const { id } = req.params;
  const category = await CategoryDB.findOne({
    where: {
      id_category: id,
    },
  });

  if (!category) {
    return res.status(404).json({
      message: "La categoria no existe en la base de datos",
    });
  }
  next();
}

module.exports = { existCategoriesInDB, isNameCategoryInDB, isCategoryIdInDB };
