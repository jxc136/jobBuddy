const { app, serverPromise } = require("../../server");
const request = require("supertest");
require("../mongodb_helper");
const Application = require('../../models/applicationModel')

describe("/applications", () => {
  afterAll((done) => {
    serverPromise.then((server) => {
      server.close(done)
    })
  })

  describe("create a new job record when job title is provided", () => {
    test("the response code is 200", async () => {

      let response = await request(app)
          .post("/api/applications")
          .send({job_title: "React Developer"
          })
          .expect(200)
      
  });
})
})