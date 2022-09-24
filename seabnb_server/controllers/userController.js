//@desc     Get all users
//@route    GET /api/user/
//@access   Private
const getAllUsers = (req, res) => {
  res.status(200).json({ message: "Getting all users" });
};

//@desc     Add a user
//@route    POST /api/user/
//@access   Private
const addUser = (req, res) => {
  res.status(200).json({ message: " Adding a new user" });
};

//@desc     Get specific user
//@route    GET /api/user/:id
//@access   Private
const getUser = (req, res) => {
  res
    .status(200)
    .json({ message: `Getting specific user with id:${req.params.id}` });
};

//@desc     Update a user
//@route    PUT /api/user/:id
//@access   Private
const updateUser = (req, res) => {
  res
    .status(200)
    .json({ message: `Updating specific user with id:${req.params.id}` });
};

//@desc     Delete a user
//@route    DELETE /api/user/:id
//@access   Private
const deleteUser = (req, res) => {
  res
    .status(200)
    .json({ message: `Deleting specific user with id:${req.params.id}` });
};

module.exports = {
  getAllUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
};
