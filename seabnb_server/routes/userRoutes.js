const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router
  .route("/api/users")
  .get(getAllUsers)
  .post(addUser);

router
  .route("/api/users/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
