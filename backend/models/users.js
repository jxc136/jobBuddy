const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  myApplications: []
});


module.exports = mongoose.model('User', userSchema)

// create a user route
// create a controller method to get all users