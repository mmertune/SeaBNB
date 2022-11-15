const asyncHandler = require("express-async-handler");
const Cabin = require("../models/cabinModel");


//@desc     Get all cabins
//@route    GET /api/cabins/
//@access   Private
const getAllCabins = asyncHandler(async (req, res) => {
  const cabins = await Cabin.find();
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
      req.body.pricePerNight &&
      req.body.owner
    )
  ) {
    res.status(400)
    // .json({ message: "please add all fields for body" });
    throw new Error("please add all fields for body")
  }
  const cabin = await Cabin.create({
    city: req.body.city,
    stateAbbrv: req.body.stateAbbrv,
    rating: req.body.rating,
    address: req.body.address,
    pricePerNight: req.body.pricePerNight,
    owner: req.body.owner,
  });
  res.status(200).json(cabin);
});

//@desc     Get specific cabin
//@route    GET /api/cabins/:id
//@access   Private
const getCabin = asyncHandler(async(req, res) => {
    const cabin = await Cabin.findById(req.params.id);
    if (!cabin) {
      res.status(400);
      throw new Error("Cabin not found");
    }
    res.status(200).json(cabin);});

//@desc     Update specific cabin
//@route    PUT /api/cabins/:id
//@access   Private
const updateCabin = asyncHandler(async(req, res) => {
    const cabin = await Cabin.findById(req.params.id);
    if (!cabin) {
      res.status(400);
      throw new Error("Cabin not found");
    }
    const updatedCabin = await Cabin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCabin);});

//@desc     Delete specific cabin
//@route    Delete /api/cabins/
//@access   Private
const deleteCabin = asyncHandler(async(req, res) => {
    const cabin = await Cabin.findById(req.params.id);
    if (!cabin) {
      res.status(400);
      throw new Error("Cabin not found");
    }
    await cabin.remove();
    res.status(200).json({ id: req.params.id });});

module.exports = {
  getAllCabins,
  addCabin,
  getCabin,
  updateCabin,
  deleteCabin,
};
