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
    app.listen(4000, () => {
    console.log('listening on port 4000')
})  
  })
  .catch((error) => (
    console.log(error)
  ))

