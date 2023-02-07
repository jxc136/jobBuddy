// Import application model
const Application = require('../models/applicationModel')

// Import Mongoose
const mongoose = require('mongoose')
const { application } = require('express')

// Get ALL applications 

const getApplications =  (req, res) => {
  Application.find().populate('user').exec(async (err, applications) => {
    if (err) {
      throw err;
    }
  res.status(200).json(applications)
  });
}

// Get ONE application

const getOneApplication = async (req, res) => {
  const {id} = req.params
  try {

    const application = await Application.findOne({id})
    if (application){
      return res.status(200).json(application)
    } else {
      return res.json({mssg: "application not found"})
    }
    
  } catch(error) {
    res.status(400).json({error: error.message})
  }
 
}

// Post a single application 
const createApplication = async (req, res) => {
  const {job_title, application_title, employer, deadline, deadline_type, status, contact_person, user} = req.body
  // add new doc to DB 
  try {
    const application = await Application.create(
      {job_title, application_title, employer, deadline, deadline_type, status, contact_person, user})
    res.status(200).json(application)
  } catch(error) {
    res.status(400).json({error: error.message})
  }
}

const deleteApplication = async (req, res) => {
  const application = req.body[0]
  console.log("Removing application " + application._id);
  // del a doc from DB 
  try {
    await Application.deleteOne({_id: application._id})
    res.status(200).json({_id: application._id})
  } catch(error) {
    console.log(error.message)
    res.status(400).json({error: error.message})
  }
}
// Update a single application 

const updateApplication = async (req, res) => {
  const { id } = req.params
    
      const application = await Application.findOneAndUpdate({_id: id}, {
        ...req.body
      })

      if (!application) {
        return res.status(400).json({error: "no such applicatiom in DB"})
      }

      res.status(200).json(application)
}

module.exports = {
  getApplications,
  getOneApplication,
  createApplication,
  deleteApplication,
  updateApplication
};
