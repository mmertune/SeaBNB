const asyncHandler = require("express-async-handler");
const Cabin = require("../models/cabinModel");
const User = require("../models/userModel");

//@desc     Get all cabins
//@route    GET /api/cabins/
//@access   Private
const getAllCabins = asyncHandler(async (req, res) => {
  const cabins = await Cabin.find();
  res.status(200).send(cabins);
});

//@desc     Get all specific user cabins
//@route    GET /api/cabins/me
//@access   Private
const getUserCabins = asyncHandler(async (req, res) => {
  const cabins = await Cabin.find({ owner: req.user.id });
  res.status(200).send(cabins);
});

//@desc     Add new cabin
//@route    POST /api/cabins/
//@access   Private
const addCabin = asyncHandler(async (req, res) => {
  if (
    !(
      req.body.city &&
      req.body.stateAbbrv &&
      req.body.rating &&
      req.body.address &&
      req.body.pricePerNight
    )
  ) {
    res.status(400);
    // .json({ message: "please add all fields for body" });
    throw new Error("please add all fields for body");
  }
  const cabin = await Cabin.create({
    city: req.body.city,
    stateAbbrv: req.body.stateAbbrv,
    rating: req.body.rating,
    address: req.body.address,
    pricePerNight: req.body.pricePerNight,
    owner: req.user.id,
  });
  res.status(200).json(cabin);
});

//@desc     Get specific cabin
//@route    GET /api/cabins/:id
//@access   Private
const getCabin = asyncHandler(async (req, res) => {
  const cabin = await Cabin.findById(req.params.id);
  if (!cabin) {
    res.status(400);
    throw new Error("Cabin not found");
  }
  res.status(200).json(cabin);
});

//@desc     Update specific cabin
//@route    PUT /api/cabins/:id
//@access   Private
const updateCabin = asyncHandler(async (req, res) => {
  const cabin = await Cabin.findById(req.params.id);
  if (!cabin) {
    res.status(400);
    throw new Error("Cabin not found");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not Found");
  }
  // makes sure the logged in user matches the cabin owner
  if (cabin.owner.toString() !== user.id) {
    res.status(401);
    throw new Error("User not Authorized");
  }
  const updatedCabin = await Cabin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedCabin);
});

//@desc     Delete specific cabin
//@route    Delete /api/cabins/
//@access   Private
const deleteCabin = asyncHandler(async (req, res) => {
  const cabin = await Cabin.findById(req.params.id);
  if (!cabin) {
    res.status(400);
    throw new Error("Cabin not found");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not Found");
  }
  // makes sure the logged in user matches the cabin owner
  if (cabin.owner.toString() !== user.id) {
    res.status(401);
    throw new Error("User not Authorized");
  }
  await cabin.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllCabins,
  getUserCabins,
  addCabin,
  getCabin,
  updateCabin,
  deleteCabin,
};
