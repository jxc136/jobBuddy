const {MongoClient} = require('mongodb');
const mongoose = require("mongoose");
const request = require("supertest");
const { seedDb } = require("../seeds")


require('dotenv').config();

describe('users', () => {
  let connection;
  let db;

  beforeAll(async () => {
    // await seedDb()
    connection = await MongoClient.connect('mongodb://127.0.0.1:27017/jobBuddy_test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // db = await connection.db(globalThis.jobBuddy);
    // const users = await db.collection('users');
   
    // await users.drop(() => {   
    
    // });
   
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('get all users', () => {

    it('returns all users in the database', async () => {
      const users = connection.collection('users')
      // const mockUsers = [{_id: 'some-user-id', firstname: 'Paddington', lastname: "Bear"}, {_id: 'some-other-user-id', firstname: "The", lastname: 'Gruffalo'}]
     
      user = {firstname: 'Paddington', lastname: "Bear", email: "pads@example.com", password: "AaBa22££"}
      await users.insertOne(user);
      // await users.insertOne(mockUsers[1]);
      const allUsers = users.find({});
      console.log("all users" + allUsers)
      expect(allUsers).toContain(user);
    });
    it('finds a user in the database', () => {
      const users = db.collection('users')
      console.log('users' + users.find({})[0])
      expect(users.find({}))
    });


  
  })
  describe('insert', () => {

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = {_id: 'some-user-id', firstname: 'Paddington', lastname: 'Bear'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });  
})

});
