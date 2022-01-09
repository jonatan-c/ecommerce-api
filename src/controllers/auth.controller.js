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
      return res.status(400).json({
        message: "User not found",
      });
    }
    const correctPassword = await bcryptjs.compare(password1, user.password1);
    if (!correctPassword) {
      return res.status(400).json({
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
    res.status(500).json({
      message: "Error autenticating user",
      error,
    });
  }
};

module.exports = { autenticateUser };
