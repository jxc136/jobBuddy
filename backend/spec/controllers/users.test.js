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
    test("a user is created", async () => {

      req = {body: {firstname: "Peter",
      lastname: "Rabbit",
      email: "pete@example.com",
      password: "AaBb22**"}}
     
      await createUser(req, {})
      const users = await User.find()
       newUser = users[users.length - 1]
      expect(newUser.email).toEqual("pete@example.com")
    })
  });