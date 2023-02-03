// Import application model
const Application = require('../models/applicationModel')

// Import Mongoose
const mongoose = require('mongoose')

// Get ALL applications 

const getApplications = async (req, res) => {
  const application = await Application.find({})
  res.status(200).json(application)
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
  const {job_title, application_title, employer, deadline, deadline_type, status, contact_person} = req.body
  // add new doc to DB 
  try {
    const application = await Application.create(
      {job_title, application_title, employer, deadline, deadline_type, status, contact_person})
    res.status(200).json(application)
  } catch(error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getApplications,
  getOneApplication,
  createApplication,
};
