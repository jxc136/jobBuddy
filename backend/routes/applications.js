// Require express package 
const express = require ('express')
const applications = require ('../controllers/applicationController')

// Create a new instance of the router
const router = express.Router(); 

// attach a route handler 

// GET all applications 
router.get('/', (req, res) => {
  res.json({mssg: 'get all applications'})
});

// POST an application 

router.post('/', (req, res) => {
  res.json({mssg: 'create an application'})
})

module.exports = router;