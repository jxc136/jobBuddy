const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const applicationsSchema = new Schema({
  
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

  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
   }
 
});

module.exports = mongoose.model('Application', applicationsSchema );