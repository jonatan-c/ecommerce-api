const AddressUserDB = require("../models/Address.model");

async function existNameAddressInDB(req, res, next) {
  const addressUser = await AddressUserDB.findAll();
  if (addressUser.length == 0) {
    return res.status(404).json({
      message: "No existen direcciones en la base de datos",
    });
  }
  next();
}

module.exports = { existNameAddressInDB };
