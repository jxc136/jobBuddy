const User = require("../models/users");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const getUsers = async (req, res) => {
  // res.json({mssg: 'GET all users'})
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

// get user by id
const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({id})
  res.status(200).json(user);
}


//signup user
const createUser = async (req, res) => {
  
  const { firstname, lastname, email, password } = req.body;
  // add doc to db
  try {
    const user = await User.signup({ firstname, lastname, email, password });

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);
    res.status(201).json({ email, token, user_id: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  loginUser,
};
