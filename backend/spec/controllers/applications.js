const server = require("../../server");
const request = require("supertest");
require("../mongodb_helper");
const Application = require('../../models/applicationModel')

describe("/applications", () => {
  // beforeEach( async () => {
  //   await User.deleteMany({});

  describe("create a new job record when job title is provided", () => {
    test("the response code is 201", async () => {

      let response = await request(server)
          .post("/api/applications")
          .send({job_title: "React Developer"
          })
      expect(response.statusCode).toBe(200)
  });
})
})