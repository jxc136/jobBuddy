const server = require("../../server");
const request = require("supertest");
// require("../mongodb_helper");
const User = require('../../models/users')

describe("/users", () => {
  // beforeEach( async () => {
  //   await User.deleteMany({});
  });

  describe("POST, when firstname, lastname, email and password are provided", () => {
    // test("the response code is 201", async () => {
    //   let response = await request(app)
    //     .post("/users")
    //     .send({email: "poppy@email.com", password: "1234"})
    //   expect(response.statusCode).toBe(201)
    // })

    test("a user is created", async () => {
      await request(server)
        .post("/users")
        .send({
          firstname: "Peter",
          lastname: "Rabbit",
          email: "pete@example.com",
          password: "AaBb22**"
        })
      const users = await User.find()
       newUser = users[users.length - 1]
      expect(newUser.email).toEqual("pete@example.com")
    })
  });