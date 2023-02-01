// Import application model
const Application = require('../models/applicationModel')

// Import Mongoose
const mongoose = require('mongoose')

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

const createPrescription = async (req, res) => {
  // map the prescription collection fields to the request body
  const {name, dosage, times_taken_per_day, total_pills} = req.body
  // add new doc to DB 
  try {
    const prescription = await Prescription.create(
      {name, dosage, times_taken_per_day, total_pills})
    // if successful, return a 200 status and a JSON object containing the object created 
    res.status(200).json(prescription)
    // If unsuccessful, return the error message
  } catch(error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  createApplication};
