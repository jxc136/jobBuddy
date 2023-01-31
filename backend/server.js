const express = require ('express')


// Create Express App
const app = express()

// Listen for Requests 

app.listen(4000, () => {
  console.log('listening on port 4000')
})