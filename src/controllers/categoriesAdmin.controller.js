const CategoryDB = require("../models/Categories.model");

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

async function createCategory(req, res) {
  try {
    const { name_category } = req.body;
    const category = await CategoryDB.create({
      name_category,
    });
    res.status(200).json({ message: "Categoria creada con exito" });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear la categoria",
      error,
    });
  }
}

async function getCategory(req, res) {
  try {
    const { id } = req.params;
    const category = await CategoryDB.findOne({
      where: {
        id_category: id,
      },
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener la categoria",
      error,
    });
  }
}

async function editCategory(req, res) {
  try {
    const { id } = req.params;
    const { name_category } = req.body;
    const category = await CategoryDB.update(
      {
        name_category,
      },
      {
        where: {
          id_category: id,
        },
      }
    );
    res.status(200).json({ message: "Categoria editada con exito" });
  } catch (error) {
    res.status(500).json({
      message: "Error al editar la categoria",
      error,
    });
  }
}

async function deleteCategory(req, res) {
  try {
    const { id } = req.params;
    const category = await CategoryDB.destroy({
      where: {
        id_category: id,
      },
    });
    res.status(200).json({ message: "Categoria eliminada con exito" });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar la categoria",
      error,
    });
  }
}
module.exports = {
  getCategories,
  createCategory,
  getCategory,
  editCategory,
  deleteCategory,
};
