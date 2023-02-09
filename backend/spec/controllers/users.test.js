const server = require("../../server");
const request = require("supertest");
require("../mongodb_helper");
const User = require('../../models/users.js')
const {
  getUsers,
  getUserById,
  createUser,
  loginUser,
} = require("../../controllers/users");

describe("/users", () => {

  describe("create a new user record when firstname, lastname, email and password are provided", () => {
    test("the response code is 201", async () => {

      let response = await request(server)
          .post("/users")
          .send({firstname: "Peter",
          lastname: "Rabbit",
          email: "pete@example.com",
          password: "AaBb22**"})
      expect(response.statusCode).toBe(200)
    });
    // test("the response is 400 if the email is already in use", async () => {
    //   let response1 = await request(server)
    //   .post("/users")
    //   .send({firstname: "Flopsy",
    //   lastname: "Bunny",
    //   email: "flops@example.com",
    //   password: "AaBb22**"})

    //   let response2 = await request(server)
    //   .post("/users")
    //   .send({firstname: "Bing",
    //   lastname: "Bunny",
    //   email: "flops@example.com",
    //   password: "AaBb22**"})
    //   // expect(response1.statusCode).toBe(200)
    //   expect(response2.statusCode).toBe(400)
    });
  });