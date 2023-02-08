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
  // beforeEach( async () => {
  //   await User.deleteMany({});
  });

  describe("create a new user record when firstname, lastname, email and password are provided", () => {
    test("the response code is 201", async () => {

      let response = await request(server)
          .post("/users")
          .send({firstname: "Flopsy",
          lastname: "Bunny",
          email: "flops@example.com",
          password: "AaBb22**"})
      expect(response.statusCode).toBe(200)
  });
})