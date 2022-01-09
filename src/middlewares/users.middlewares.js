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
      return res.status(400).json({
        message: "Email already in use",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: "Error validating email",
      error,
    });
  }
};

module.exports = { isEmailValid };
