const ProductsDB = require("../models/Products.model");

const fs = require("fs");
const path = require("path");

async function getAllProducts(req, res) {
  try {
    const products = await ProductsDB.findAll({
      include: ["category"],
    });
    // *** multer
    products.map((img) => {
      fs.writeFileSync(
        path.join(
          __dirname,
          "../images/products_images/output/" + img.id_product + "imagen.png"
        ),
        img.image_product
      );
    });
    const imagesDir = fs.readdirSync(
      path.join(__dirname, "../images/products_images/output/")
    );

    //*****
    const resultadoFinal = products.map((product) => {
      return {
        id_product: product.id_product,
        name_product: product.name_product,
        price_product: product.price_product,
        description_product: product.description_product,
        stock_product: product.stock_product,
        id_category: product.id_category,
        image_product: `http://localhost:4005/${imagesDir.find((img) =>
          img.includes(product.id_product)
        )}`,
        category: product.category,
      };
    });

    const { pageNumber, pageSize, category } = req.query;

    if (category !== undefined) {
      const mapped = resultadoFinal.filter((product) => {
        return product.category.name_category === category;
      });

      res.status(200).json(mapped);
    } else if (pageNumber !== undefined) {
      const mapeoDelPaginado = resultadoFinal.length / pageSize;
      const mapped = resultadoFinal.slice(
        (pageNumber - 1) * pageSize,
        pageNumber * pageSize
      );

      res.status(200).json(mapped);
    } else if (pageSize !== undefined) {
      const pageInitial = 0;
      const pageNumberNext = 10;

      const paginated = resultadoFinal.slice(
        (pageInitial - 1) * pageSize,
        pageNumberNext * pageSize
      );

      res.status(200).json(paginated);
    } else {
      res.status(200).json(resultadoFinal);
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
}

async function getProductById(req, res) {
  try {
    const products = await ProductsDB.findByPk(req.params.id, {
      include: ["category"],
    });

    products.map((img) => {
      fs.writeFileSync(
        path.join(
          __dirname,
          "../images/products_images/output/" + img.id_product + "imagen.png"
        ),
        img.image_product
      );
    });
    const imagesDir = fs.readdirSync(
      path.join(__dirname, "../images/products_images/output/")
    );

    //*****
    const resultadoFinal = products.map((product) => {
      return {
        id_product: product.id_product,
        name_product: product.name_product,
        price_product: product.price_product,
        description_product: product.description_product,
        stock_product: product.stock_product,
        id_category: product.id_category,
        image_product: `http://localhost:4005/${imagesDir.find((img) =>
          img.includes(product.id_product)
        )}`,
        category: product.category,
      };
    });

    res.status(200).json(resultadoFinal);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
}

async function createProduct(req, res) {
  try {
    const data = fs.readFileSync(
      path.join(
        __dirname,
        "../images/products_images/input/",
        req.file.filename
      )
    );
    const product = await ProductsDB.create({
      name_product: req.body.name_product,
      price_product: req.body.price_product,
      description_product: req.body.description_product,
      stock_product: req.body.stock_product,
      id_category: parseInt(req.body.id_category),
      image_product: data,
    });

    res.status(201).json("Product created");
  } catch (error) {
    res.status(500).json(error);
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
        id_category: parseInt(req.body.id_category),
      },
      {
        where: {
          id_product: req.params.id,
        },
      }
    );
    res.status(200).json("Product updated");
  } catch (error) {
    res.status(500).json(error);
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
    res.status(500).json(error);
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
