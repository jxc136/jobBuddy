require('dotenv').config()
// import {} from 'dotenv/config'
const express = require ('express');
const mongoose = require('mongoose');
const Application = require('./models/applicationModel')
const applicationRoutes = require('./routes/applications')
const userRoutes = require('./routes/users')

// Create Express App
const app = express()

// Middleware 

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes

app.use('/api/applications', applicationRoutes)
app.use('/users', userRoutes)

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
  
 // Ensure that application schema has been created
  console.log(Application)
  

