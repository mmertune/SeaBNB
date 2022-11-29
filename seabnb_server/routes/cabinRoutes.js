const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getAllCabins,
  getUserCabins,
  addCabin,
  getCabin,
  updateCabin,
  deleteCabin,
} = require("../controllers/cabinController");

router.route("/").get(getAllCabins).post(protect, addCabin);
router.route("/me").get(protect, getUserCabins);
router
  .route("/:id")
  .get(protect, getCabin)
  .put(protect, updateCabin)
  .delete(protect, deleteCabin);
module.exports = router;
