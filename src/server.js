const express = require("express");
const cors = require("cors");

const db = require("./models/Relations");

const app = express();
app.use(cors());
app.use(express.json());

db.sequelize.sync().then(() => {
  console.log("DB has been created successfully");
});

module.exports = app;
