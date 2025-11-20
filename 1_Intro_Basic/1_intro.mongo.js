// install the mongodb community and set up the connection
// install the mongodb extension
// real time updation occurs in database compass and vs-code mongodb
// download mongosh  (see the directory of installation)   -->   this is main shell of the mongodb

// net start/stop mongodb     <-- to start or stop mongodb
// ctrl + l -> is used to clear all the command
// use database_name   : could also create database if not already exists
// db.collection_name.  : could create a collection if not already exists.
// db.collection_name.insertOne/Many : is used to add document(in json) to the collection of the database.

// mongosh(in cmd) is used to start the mongo shell
// be default database is test database and any database remains temporary until util a data is stored in the database

// BSON : Binary JSON has better space efficiency and offers more number of datatypes (includeing date and integer type)
// we write the data in json or js object but mongodb converts the json data to bson data for storation.
// document in mongodb is same a srow in sql so each document contains the info of one individual data  (and collection is sam as table in sql)

// show collection: is used to see all the collection of the database
// db.collection_name.insertOne() : is used to insert a document  if form for js object
//db.collection_name.insertMany() : is used to insert many document in form of array of js objects
// db.collection_name.find() : is show all the documents (in form of an array)
// .find(condition, condition) : is used to add a condition during finding of documents and returs a cursor(reference of orginal in fomr of array)
// .findOne(condition, condition) : returns the first sigle document without array just the document of js object
/*
    test> use college       <-creates a database...
        switched to db college
    college> db.students.insertOne({name: "mihir", age: 15, location: "Lucknow" })

    //output
    {
    acknowledged: true,             <- means data added successfully
    insertedId: ObjectId('6918286b75f46c05ca63b112')        <- its teh unique identifier for each document
    }
    // mongodb documents : does follow a schema any key and any num of key valve pair could be inserted into the document
    college>  db.students.insertMany([ {name: "Vaishali", age: 21, marks:"A+"}, {name: "Divyansh", age:22} ])
    {
        acknowledged: true,
        insertedIds: {
        '0': ObjectId('691832c375f46c05ca63b113'),
        '1': ObjectId('691832c375f46c05ca63b114')
    }
*/

