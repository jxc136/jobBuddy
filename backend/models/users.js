const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
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

userSchema.statics.signup = async function({firstname, lastname, email, password}) {
 const exists = await this.findOne({ email })

 if (!email || !password || !firstname || !lastname) {
  throw Error('All fields must be filled in')
 }
 if (exists) {
  throw Error('Email already in use')
 }

 if (!validator.isEmail(email)) {
      throw Error('Email not valid')
    }

if (!validator.isStrongPassword(password)) {
      throw Error('Password must contain:\n* at least 8 characters or more\n* at least one uppercase and one lower case letter\n* at least one number\n* at least one symbol')
    }

 const salt = await bcrypt.genSalt(10)
 const hash = await bcrypt.hash(password, salt)

 const user = await this.create({firstname, lastname, email, password: hash}) 

 return user
} 

// userSchema.statics.signin = async function(email, password) {

//   if (!email || !password) {
//     throw Error('All fields must be filled')
//   }

//   const user = await this.findOne({ email })
//   if (!user) {
//     throw Error('Incorrect email')
//   }

//   const match = await bcrypt.compare(password, user.password)
//   if (!match) {
//     throw Error('Incorrect password')
//   }
//   return user
// }

module.exports = mongoose.model('User', userSchema)

// create a user route
// create a controller method to get all users