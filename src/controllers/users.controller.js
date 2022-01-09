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

module.exports = { createUser };
