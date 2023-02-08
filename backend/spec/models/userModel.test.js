
const User = require("../../models/users");

describe('User Model', () => {
  it('has a firstname', () => {
    const user = new User({
      firstname: "Peter",
      lastname: "Rabbit",
      email: "pete@example.com",
      password: "AaBb22**"
    });
    expect(user.firstname).toEqual("Peter")
  });

  it('has a lastname', () => {
    const user = new User({
      firstname: "Peter",
      lastname: "Rabbit",
      email: "pete@example.com",
      password: "AaBb22**"
    });
    expect(user.lastname).toEqual("Rabbit")
  });

  it("has an email address", () => {
    const user = new User({
      firstname: "Peter",
      lastname: "Rabbit",
      email: "pete@example.com",
      password: "AaBb22**"
    });
    expect(user.email).toEqual("pete@example.com");
  });

  it('has a password', () => {
    const user = new User({
      firstname: "Peter",
      lastname: "Rabbit",
      email: "pete@example.com",
      password: "AaBb22**"
    });
    expect(user.password).toEqual("AaBb22**")
  });
});
  // it('does not get created if the password is not strong enough', () => {
  //   const user = new User({
  //     firstname: "Peter",
  //     lastname: "Rabbit",
  //     email: "pete@example.com",
  //     password: "123"
  //   });
  //   expect(user.password).toEqual("123")
  // });
  // it("can save a user", (done) => {
  //   const user = new User({
  //     firstname: "Peter",
  //     lastname: "Rabbit",
  //     email: "pete@example.com",
  //     password: "AaBb22**"
  //   });
  //   User.find((err, users) => {
  //     expect(err).toBeNull();
  //   expect(users[0]).toMatchObject({
  //     firstname: "Peter",
  //     lastname: "Rabbit",
  //     email: "pete@example.com",
  //     password: "AaBb22**"
  //   });
  //   done();
  // });
// describe('users', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     // await seedDb()
//     connection = await MongoClient.connect('mongodb://127.0.0.1/jobBuddy_test', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     await users.insertOne({firstname: 'Paddington', lastname: "Bear", email: "pads@example.com", password: "AaBa22££"})
    // db = await connection.db(jobBuddy_test);
    // const users = await db.collection('users');
   
    // await users.drop(() => {   
    
    // });
   
//   });

//   afterAll(async () => {
//     await mongoose.connection.close();
//   });

//   describe('users', () => {

//     it('returns all users in the database', async () => {
//       const users = db.collection('users')
//       // const mockUsers = [{_id: 'some-user-id', firstname: 'Paddington', lastname: "Bear"}, {_id: 'some-other-user-id', firstname: "The", lastname: 'Gruffalo'}]
     
//       user = {firstname: 'Paddington', lastname: "Bear", email: "pads@example.com", password: "AaBa22££"}
//       await users.save(user);
//       // await users.insertOne(mockUsers[1]);
//       // const allUsers = users.find({});
//       // console.log("all users" + allUsers)
//       // expect(allUsers).toContain(user);
//     });
//     xit('finds a user in the database', () => {
//       const users = db.collection('users')
//       // console.log('users' + users.find({})[0])
//       expect(users.find({}))
//     });


  
//   })
// //   describe('insert', () => {

// //   it('should insert a doc into collection', async () => {
// //     const users = db.collection('users');

// //     const mockUser = {_id: 'some-user-id', firstname: 'Paddington', lastname: 'Bear'};
// //     await users.insertOne(mockUser);

// //     const insertedUser = await users.findOne({_id: 'some-user-id'});
// //     expect(insertedUser).toEqual(mockUser);
// //   });  
// // })

// })