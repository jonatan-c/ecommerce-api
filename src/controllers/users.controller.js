require("dotenv").config();

const usersDB = require("../models/Users.model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function createUser(req, res) {
  try {
    const resp = req.body.password1;
    const salt = await bcrypt.genSalt(10);
    const respHash = await bcrypt.hash(resp, salt);
    const newUser = await usersDB.create({
      name: req.body.name,
      email: req.body.email,
      password1: respHash,
      role: "user",
      state: "offline",
    });
    res.status(200).json({
      message: "User created correctly",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error,
    });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await usersDB.findAll({
      attributes: { exclude: ["password1"] },
    });
    res.status(200).json({
      message: "Users retrieved correctly",
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving users",
      error,
    });
  }
}

async function getUserById(req, res) {
  try {
    const user = await usersDB.findOne({
      where: { id_user: req.params.id },
      attributes: { exclude: ["password1"] },
    });
    res.status(200).json({
      message: "User retrieved correctly",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving user",
      error,
    });
  }
}

async function updateRole(req, res) {
  try {
    const user = await usersDB.update(
      { role: req.body.role },
      { where: { id_user: req.params.id } }
    );
    res.status(200).json({
      message: "User role updated correctly",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating user role",
      error,
    });
  }
}

module.exports = { createUser, getAllUsers, getUserById, updateRole };
