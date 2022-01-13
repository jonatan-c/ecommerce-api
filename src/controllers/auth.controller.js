require("dotenv").config();
const usersDB = require("../models/Users.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const autenticateUser = async (req, res) => {
  const { email, password1 } = req.body;
  try {
    let user = await usersDB.findOne({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const correctPassword = await bcryptjs.compare(password1, user.password1);
    if (!correctPassword) {
      return res.status(404).json({
        message: "Incorrect password",
      });
    }

    const payload = {
      id_user: user.id_user,
      role: user.role,
    };

    usuario = await usersDB.update(
      {
        state: "online",
      },
      {
        where: { email: email },
      }
    );

    // si todo es correcto
    // Crear y firmar el JWT
    console.log(payload);

    //Firmo token
    jwt.sign(
      payload,
      process.env.SECRET_TOKEN,
      {
        expiresIn: 3600,
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    res.status(400).json({
      message: "Error autenticating user",
      error,
    });
  }
};

// obtiene que usuario esta autenticado
const getUserAutenticated = async (req, res) => {
  const usuario = await usersDB.findOne({
    where: { id_user: req.decoded.id_user },
    attributes: { exclude: ["password1", "state"] },
  });
  res.json(usuario);
};

// const updateRole = async (req, res) => {
//   try {
//     const result = await usersDB.update(
//       {
//         state: req.body.estadoUser,
//       },
//       { where: { id_user: req.body.id_user } }
//     );
//     res.json({ message: "The user is discontinued" });
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = { autenticateUser, getUserAutenticated };
