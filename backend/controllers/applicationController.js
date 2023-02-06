// Import application model
const Application = require('../models/applicationModel')

// Import Mongoose
const mongoose = require('mongoose')
const { application } = require('express')

// Get ALL applications 

const getApplications = async (req, res) => {
  const application = await Application.find({})
  res.status(200).json(application)
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

const deleteApplication = async (req, res) => {
  const application = req.body[0]
  console.log("Removing application " + application._id);
  // del a doc from DB 
  try {
    await Application.deleteOne(application)
    res.status(200).json({_id: application._id})
  } catch(error) {
    console.log(error.message)
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  createApplication,
  getApplications,
  deleteApplication
};
