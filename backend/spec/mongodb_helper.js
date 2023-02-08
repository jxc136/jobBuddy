var mongoose = require("mongoose");
require("dotenv").config();


beforeAll( (done) => {
    mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  var db = mongoose.connection;
  const users = db.collection('users')
  users.deleteMany({})
  const applications = db.collection('applications')
  applications.deleteMany({})
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.on("open", function () {
    done();
  });
});

afterAll(function (done) {
  mongoose.connection.close(true, function () {
    done();
  });
});
