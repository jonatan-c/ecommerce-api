const AddressUserDB = require("../models/Address.model");
const tableManyManyAddressUsersDB = require("../models/TableManyManyAddressUsers.model");

// async function getAllAddressUser(req, res) {
//   try {
// const addressUser = await tableManyManyAddressUsersDB.findAll({
//   where: { id_user: req.decoded.id_user },
//   include: ["users", "addresses"],
// });

//     return res.status(200).json({
//       addressDB,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "Error inesperado",
//     });
//   }
// }

module.exports = {};
