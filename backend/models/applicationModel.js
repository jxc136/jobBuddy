const mongoose = require('mongoose')

const ApplicationSchema = new mongoose.Schema({
  
  job_title: {
    type: String, 
    required: true,
  },

  application_title: {
    type: String
  },
  
  employer: {
    type: String
  },

  deadline: {
    type: Date,
  },

  deadline_type: {
    type: String
  },

  status: {
    type: String
  },

  contact_person: {
    type: String
  },
 
})

const Application = mongoose.model("Application", ApplicationSchema)

module.exports = Application
