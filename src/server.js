const express = require("express");
const cors = require("cors");
const db = require("./models/Relations");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sequelize.sync({ force: true });
db.sequelize.sync().then(() => {
  console.log("DB has been created successfully");
});

const userRoutes = require("./routes/users.routes");
const authRoutes = require("./routes/auth.routes");
const productsAdminRoutes = require("./routes/productsAdmin.routes");
const categoriesAdminRoutes = require("./routes/categoriesAdmin.routes");
const ordersStatusAdminRoutes = require("./routes/ordersStatusAdmin.routes");
const addressUserRoutes = require("./routes/addressUser.routes");
const productsUsersRoutes = require("./routes/productsUser.routes");

// ********************* SWAGGER ************

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Ecommerce API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.routes.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
// ************************

//********************************************* USER **********************
app.use("/users", userRoutes);
//********************************************* AUTH **********************
app.use("/auth", authRoutes);
//********************************************* PRODUCTS ADMIN **********************
app.use("/productsAdmin", productsAdminRoutes);
app.use("/categoriesAdmin", categoriesAdminRoutes);
app.use("/ordersStatusAdmin", ordersStatusAdminRoutes);
// ********************************************* USER **********************
// app.use("/usersAddress", addressUserRoutes);

app.use("/productsUser", productsUsersRoutes);

module.exports = app;
