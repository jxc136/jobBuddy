const {MongoClient} = require('mongodb');
const mongoose = require("mongoose");
const request = require("supertest");

require("../mongodb_helper");
const Application = require("../../models/applicationModel");


describe('Application Model', () => {
  it('has a job title', () => {
    const application = new Application({
      job_title: "Software Engineer"
    });
    expect(application.job_title).toEqual("Software Engineer")
  });
});