require('dotenv').config()
const express = require ('express');
const mongoose = require('mongoose');

// Create Express App
const app = express()


// Routes

app.get("/", (req, res) => {
  res.json({mssg: 'welcome to the app'})
})

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

