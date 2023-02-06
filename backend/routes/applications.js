// Require express package 
const express = require ('express')

const {  
getApplications, 
getOneApplication,
createApplication,
<<<<<<< HEAD
getApplications,
deleteApplication
=======
updateApplication
>>>>>>> main
} = require ('../controllers/applicationController')

// Create a new instance of the router
const router = express.Router(); 

// attach a route handler 

// GET all applications 
router.get('/', getApplications);

// GET a single application
router.get('/:id', getOneApplication)

// POST an application 

router.post('/', createApplication)
router.post('/deleteApplication', deleteApplication);

// PATCH an application

router.patch('/:id', updateApplication)

module.exports = router;