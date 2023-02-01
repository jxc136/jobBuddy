// Import application model
const Appplication = require('../models/applicationModel')

// Import Mongoose
const mongoose = require('mongoose')

// Post a single application 

const createApplication = async (req, res) => {
  const {job_title, application_title, employer, deadline, deadline_type, status, contact_person} = req.body
  // add new doc to DB 
  try {
    const application = await Application.create(
      {job_title, application_title, temployer, deadline, deadline_type, status, contact_person})
    res.status(200).json(application)
  } catch(error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  createApplication};
