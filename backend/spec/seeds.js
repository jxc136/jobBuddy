const mongoose = require('mongoose');
const User = require("../models/users");
const Application = require('../models/applicationModel');

  const seedUser = [
    {
      firstname: 'Amy',
      lastname: 'Winehouse',
      email: 'ams@example.com',
      password: 'Jelly23&'
    },
    {
      firstname: 'Moana',
      lastname: 'Ocean',
      email: 'me@example.com',
      password: 'SeaCrab22%'
    },
    {
      firstname: 'Fireman',
      lastname: 'Sam',
      email: 'fireman@example.com',
      password: 'myHose45*'
    }
  ]

  const seedDb = async () => {
    await User.deleteMany({});
    await User.signup(seedUser[0]);
    await User.signup(seedUser[1]);
    await User.signup(seedUser[2]);
  }

  mongoose
  .connect('mongodb://127.0.0.1:27017/jobBuddy_test')
  .then(() => seedDb())
  .then(() => mongoose.connection.close())
  .catch((error) => console.log(error));