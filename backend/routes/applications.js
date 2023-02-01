// Require express package 
const express = require ('express')
const applications = require ('../controllers/applicationController')

// Create a new instance of the router
const router = express.Router(); 

// attach a route handler 
router.get('/', (req, res) => {
  res.JSON({mssg: 'get all applications'})
});

module.exports = router;