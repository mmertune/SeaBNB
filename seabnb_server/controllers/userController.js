const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//@desc     Register a User
//@route    POST /api/user/register
//@access   Private
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    });
  } else{
    res.status(400)
    throw new Error("Invalid user data")
  }
});

//@desc     Authenticate a User
//@route    POST /api/login
//@access   Private
const authenticateUser = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: "Login User" });
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      id_: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

//@desc     Get User Info
//@route    GET /api/me
//@access   Private
const getUserInfo = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: "Get User Info" });
  const {_id, name, email} = await User.findById(req.user.id)

  res.status(200).json({
    id:_id,
    name, 
    email
  })
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

module.exports = {
  registerUser,
  authenticateUser,
  getUserInfo,
};
