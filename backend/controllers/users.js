const User = require('../models/users');
const mongoose = require('mongoose');

const getUsers = async (req, res) => {
  res.json({mssg: 'GET all users'})
  // const users = await User.find({}).sort({createdAt: -1})
  // res.status(200).json(users)
}

const createUser = async (req, res) => {
  const {firstname, lastname, email, password} = req.body

  // add doc to db
  try {
    const user = await User.create({ firstname, lastname, email, password })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getUsers, 
  createUser
}
