const {MongoClient} = require('mongodb');
const mongoose = require("mongoose");
const request = require("supertest");
const seeds = require("../seeds")
require('dotenv').config();

describe('users', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    db = await connection.db(globalThis.jobBuddy);
    const applications = await db.collection('users');
    await applications.drop(() => {   
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('get all users', () => {
    it('finds a user in the database', () => {
      const users = db.collection('users')
      console.log('users' + users.find({})[0])
      expect(users.find({}))
    });


    it('returns all users in the database', async () => {
      const users = db.collection('users')
      const mockUsers = [{_id: 'some-user-id', firstname: 'Paddington', lastname: "Bear"}, {_id: 'some-other-user-id', firstname: "The", lastname: 'Gruffalo'}]
     
      await users.insertOne(mockUsers[0]);
      await users.insertOne(mockUsers[1]);
      const allUsers = users.find({});
      expect(allUsers).toEqual(mockUsers);
    })
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
