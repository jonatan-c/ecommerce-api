const usersDB = require("../models/users.model");

const isEmailValid = async (req, res, next) => {
  try {
    const email = req.body.email;
    const user = await usersDB.findOne({
      where: {
        email,
      },
    });
    if (user) {
      return res.status(200).json({
        message: "Email already in use",
      });
    }
    next();
  } catch (error) {
    res.status(404).json({
      message: "Error validating email",
      error,
    });
  }
};

const isEmail = async (req, res, next) => {
  try {
    const email = req.body.email;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (regex.test(email)) {
      next();
    } else {
      return res.status(200).json({
        message: "Email is not valid, must be like: email@email.com",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Error validating email",
      error,
    });
  }
};

const isPasswordValid = async (req, res, next) => {
  try {
    const password1 = req.body.password1;
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (regex.test(password1)) {
      next();
    } else {
      return res.status(400).json({
        message:
          "Password is not valid, must be haver, 8-15 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error validating password",
      error,
    });
  }
};

module.exports = { isEmailValid, isEmail, isPasswordValid };
