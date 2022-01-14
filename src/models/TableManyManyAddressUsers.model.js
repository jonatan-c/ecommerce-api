const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const tableManyManyAddressUsersDB = sequelize.define(
  "tableManyManyAddressUsers",
  {
    id_tableManyManyAddressUsers: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },

  {
    timestamps: false,
  }
);

module.exports = tableManyManyAddressUsersDB;
