require("dotenv").config();
const jwt = require("jsonwebtoken");
const usersDB = require("../models/users.model");

const hasToken = (req, res, next) => {
  // Leer el token del header
  const token = req.header("x-auth-token");

  //Revisar si no hay token
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
      if (err) {
        return res.json({ mensaje: "Token inválida" });
      } else {
        req.decoded = decoded;
        console.log(req.decoded);
        next();
      }
    });
  } else {
    res.send({
      mensaje: "Token no proveída.",
    });
  }
};

const isTokenSuperAdmin = (req, res, next) => {
  // Leer el token del header
  const token = req.header("x-auth-token");

  //Revisar si no hay token
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
      if (err) {
        return res.json({ mensaje: "Token inválida" });
      } else {
        req.decoded = decoded;
        if (req.decoded.role == "SuperAdmin") {
          next();
        } else {
          return res.json({
            msg: "You are not SuperAdmin",
          });
        }
      }
    });
  } else {
    res.send({
      mensaje: "Token no proveída.",
    });
  }
};

const isUserInDB = async (req, res, next) => {
  const { id } = req.params;
  const result = await usersDB.findOne({
    where: {
      id_user: id,
    },
  });
  if (result) {
    next();
  } else {
    res.send({
      mensaje: "The user does not exist",
    });
  }
};

module.exports = { hasToken, isTokenSuperAdmin, isUserInDB };
