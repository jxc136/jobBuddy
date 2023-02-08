var mongoose = require("mongoose");

beforeAll( (done) => {
    mongoose.connect("mongodb://127.0.0.1/jobBuddy_test", {
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
