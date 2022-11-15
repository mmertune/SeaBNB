const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/authMiddleware")
const {
  registerUser,
  authenticateUser,
  getUserInfo,
} = require("../controllers/userController");

router.route("/register").post(registerUser);
router.route("/login").post(authenticateUser);
router.route("/me").get(protect, getUserInfo);

module.exports = router;
