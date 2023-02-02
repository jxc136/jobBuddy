const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const userSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  myApplications: []
});


module.exports = mongoose.model('User', userSchema)

// create a user route
// create a controller method to get all users