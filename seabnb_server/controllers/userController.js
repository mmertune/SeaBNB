const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc     Get all users
//@route    GET /api/user/
//@access   Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

//@desc     Add a user
//@route    POST /api/user/
//@access   Private
const addUser = asyncHandler(async (req, res) => {
  if (!(req.body.firstname && req.body.lastname && req.body.email)) {
    res.status(400).json({ message: "please add a field for body" });
  }
  const user = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
  });
  res.status(200).json(user);
});

//@desc     Get specific user
//@route    GET /api/user/:id
//@access   Private
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

//@desc     Update a user
//@route    PUT /api/user/:id
//@access   Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUser);
});

//@desc     Delete a user
//@route    DELETE /api/user/:id
//@access   Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  await user.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
};
