
// .find(condition, condition) : is used to add a condition during finding of documents and returs a cursor(reference of orginal in fomr of array)
// .findOne(condition, condition) : returns the first sigle document without array just the document of js object
/*
    college> db.students.findOne({age:15})
    {
    _id: ObjectId('6918286b75f46c05ca63b112'),
    name: 'mihir',
    age: 15,
    location: 'Lucknow'
    }
    college> db.students.find({age:15, name:"mihir"})
    [
    {
        _id: ObjectId('6918286b75f46c05ca63b112'),
        name: 'mihir',
        age: 15,
        location: 'Lucknow'
    }
    ]
*/

// Query Opeator
/*
    Comparison
    The following operators can be used in queries to compare values:

    $eq: Values are equal
    $ne: Values are not equal
    $gt: Value is greater than another value    {$gt: 75}
    $gte: Value is greater than or equal to another value
    $lt: Value is less than another value
    $lte: Value is less than or equal to another value
    $in: Value is matched within an array
    Logical
    The following operators can logically compare multiple queries.

    $and: Returns documents where both queries match
    $or: Returns documents where either query matches
    db.students.find({ $or : [ {marks: {$gt: 75}, {city: {$in: ["lucknow", "mumbai"]} } ] })
    $nor: Returns documents where both queries fail to match
    $not: Returns documents where the query does not match
*/
/*
    college> db.students.find({$and : [{age: {$gte: 15} }, {name: {$in: ["mihir", "Divyansh"]} }] })
    [
    {
        _id: ObjectId('6918286b75f46c05ca63b112'),
        name: 'mihir',
        age: 15,
        location: 'Lucknow'
    },
    {
        _id: ObjectId('691832c375f46c05ca63b114'),
        name: 'Divyansh',
        age: 22
    }
    ]
*/