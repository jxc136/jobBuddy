require('dotenv').config()
// import {} from 'dotenv/config'
const express = require ('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users')

// Create Express App
const app = express()

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/users', userRoutes)
// Routes

// Connect to Database
mongoose.connect(process.env.MONG_URI)
  .then(() => {
    // Only listen for requests when connected
    app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})  
  })
  .catch((error) => (
    console.log(error)
  ))


