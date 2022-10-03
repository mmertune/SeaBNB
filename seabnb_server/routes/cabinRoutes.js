const express = require("express");
const router = express.Router();

const {
  getAllCabins,
  addCabin,
  getCabin,
  updateCabin,
  deleteCabin,
} = require("../controllers/cabinController");

router.route("/").get(getAllCabins).post(addCabin);

router.route("/:id").get(getCabin).put(updateCabin).delete(deleteCabin);
module.exports = router
