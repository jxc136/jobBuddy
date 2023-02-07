const {MongoClient} = require('mongodb');
require('dotenv').config()

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://127.0.0.1:27017/jobBuddy_test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.jobBuddy);
    const applications = await db.collection('applications');
    await applications.drop(() => {   
    });
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const applications = db.collection('applications');

    const mockApplication = {_id: 'some-application-id', job_title: 'Apple'};
    await applications.insertOne(mockApplication);

    const insertedApplication = await applications.findOne({_id: 'some-application-id'});
    expect(insertedApplication).toEqual(mockApplication);
  });
 

  it('should insert and delete a doc', async () => {
    const applications = db.collection('applications');
    
    const mockApplication = {_id: 'some-application-id-1', job_title: 'Apple-1'};
    await applications.insertOne(mockApplication);

    const insertedApplication = await applications.findOne({_id: 'some-application-id-1'});
    expect(insertedApplication).toEqual(mockApplication);

    await applications.deleteOne(mockApplication);
    const deletedApplication = await applications.findOne({_id: 'some-application-id-1'});
    expect(deletedApplication).toEqual(null);
  });

   // You shouldn't be able to add in any field that isn't defined in the schema
  //  xit("inserts application successfully, but the field not defined in schema should be undefined", async () => {

  //   const applications = db.collection('applications');
  //   const mockApplication = {_id: 'another-application-id', wrong_field: 'wrong'};
  //   await applications.insertOne(mockApplication);
  //   const insertedApplication = await applications.findOne({_id: 'another-application-id'});
  //   expect(insertedApplication._id).toBeDefined();
  //   // expect(insertedApplication.wrong_field:).toBeUndefined()
  //   });
   

});
