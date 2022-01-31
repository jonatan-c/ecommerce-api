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
        return res.status(404).json({ mensaje: "Token inválida" });
      } else {
        req.decoded = decoded;
        console.log(req.decoded);
        next();
      }
    });
  } else {
    res.status(404).send({
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
        return res.status(404).json({ mensaje: "Token inválida" });
      } else {
        req.decoded = decoded;
        if (req.decoded.role == "superadmin") {
          next();
        } else {
          return res.status(403).json({
            msg: "You are not SuperAdmin",
          });
        }
      }
    });
  } else {
    res.status(403).send({
      mensaje: "Token no proveída.",
    });
  }
};

const isTokenAdmin = (req, res, next) => {
  // Leer el token del header
  const token = req.header("x-auth-token");
  //Revisar si no hay token
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
      if (err) {
        return res.status(403).json({ mensaje: "Token inválida" });
      } else {
        req.decoded = decoded;
        if (req.decoded.role == "admin") {
          next();
        } else {
          return res.status(403).json({
            msg: "You are not Admin",
          });
        }
      }
    });
  } else {
    res.status(403).send({
      mensaje: "Token no proveída.",
    });
  }
};

const isTokenUser = (req, res, next) => {
  // Leer el token del header
  const token = req.header("x-auth-token");
  //Revisar si no hay token
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
      if (err) {
        return res.status(403).json({ mensaje: "Token inválida" });
      } else {
        req.decoded = decoded;
        if (req.decoded.role == "user") {
          next();
        } else {
          return res.status(403).json({
            msg: "You are not User",
          });
        }
      }
    });
  } else {
    res.status(403).send({
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
    res.status(404).send({
      mensaje: "The user does not exist",
    });
  }
};

const isUserAnyoneOnline = async (req, res, next) => {
  const user = await usersDB.findOne({
    where: {
      id_user: req.decoded.id_user,
    },
  });
  if (user.state == "online") {
    next();
  } else {
    res.status(403).send({
      mensaje: "The user is not online",
    });
  }
};

module.exports = {
  hasToken,
  isTokenSuperAdmin,
  isUserInDB,
  isTokenAdmin,
  isTokenUser,
  isUserAnyoneOnline,
};
