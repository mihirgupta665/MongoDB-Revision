// updateOne(filter, update, options) : is  use to update the document and generally set attribute is used to chnage the value or add a new field
// updateMany() :  update all documents that match  a specified filter
// replaceOne() : Replaces at most a single document entirely by new sets of field

/*
college> db.students.updateOne( {location:"Lucknow"}, {$set: {age: 21}} )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
college> db.students.replaceOne({name:"Divyansh"}, {name:"divyansh", age:23, location:"Shaharanpur"})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
college> db.students.find()
[
  {
    _id: ObjectId('6918286b75f46c05ca63b112'),
    name: 'mihir',
    age: 21,
    location: 'Lucknow'
  },
  {
    _id: ObjectId('691832c375f46c05ca63b113'),
    name: 'Vaishali',
    age: 21,
    marks: 'A+'
  },
  {
    _id: ObjectId('691832c375f46c05ca63b114'),
    name: 'divyansh',
    age: 23,
    location: 'Shaharanpur'
  }
]
*/

// Nesting
/*
college> db.students.find({"performance.marks": 98 })
    [
    {
        _id: ObjectId('6919e761711138defd63b112'),
        name: 'preeti',
        age: 23,
        performance: { marks: 98, grade: 'A+' }
    }
    ]
*/

// db.collection.deleteOne(condition, options)       deleteMany({}) : use to delete a document/ all documents of the collection
// dp.dropDatabase() : is used to delete the entire database

/*
    college> db.students.deleteOne({name: "divyansh"})
    { acknowledged: true, deletedCount: 1 }
    college> db.students.find()
    [
    {
        _id: ObjectId('6918286b75f46c05ca63b112'),
        name: 'mihir',
        age: 21,
        location: 'Lucknow'
    },
    {
        _id: ObjectId('691832c375f46c05ca63b113'),
        name: 'Vaishali',
        age: 21,
        marks: 'A+'
    },
    {
        _id: ObjectId('6919e761711138defd63b112'),
        name: 'preeti',
        age: 23,
        performance: { marks: 98, grade: 'A+' }
    }
    ]
*/