
const mongoose = require("mongoose"); 
// mongoose helps js to connect with the mongodb database 
async function main(){ 
    await mongoose.connect("mongodb://127.0.0.1:27017/test"); // the url indicates which database to be conected 
    // connect with mongodb localhost port database(which you want to use) 
} 
main()
    .then(()=>{ 
        console.log("connection established"); 
    })
    .catch((err)=>{ 
        console.log(err); 
    });

// schema defines the shape of the document within that collection

const userSchema = new mongoose.Schema({    // Schema is a class whose constructor takes an object so return or forms also a object
    name: String,       // objects passed in costructor as key and pair in which key is the column name and its value is the data type
    email: String,
    age: Number,    // mongoose adds by default a id to schema and id has the data type ObjectId
});

const User = mongoose.model("User", userSchema);
    // database name        // database name 
    // database name is converted to small leters and plural form is written.
const Employee = mongoose.model("Employee", userSchema);

const user1 = new User({name: "Mihir Gupta", email: "mihirgupta665", age: "15"});
// the object of the model class need to be created which forms the document
// the document object is not added just by creating it, but we could save it load it through node
/*
node
.load index.js
*/

// save() : for saving it directly in mongodb we need to save it first each document object has a method save() which returns a promise
/*
user1.save()
    .then((res) => {
        console.log(res);   // promise if true returns the same saved document
    })
    .catch((err) => {
        console.log("Error in DataBase : " + err);
    });
*/

/*
User.insertMany([
    {name: "Vaishali Patel", email: "vaishalipatel665@gmail.com", age:22},
    {name: "Preeti", email: "preetikumari665@gmail.com", age:23},
    {name: "divyansh", email: "divyansh665@gmail.com", age:24}
]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("Error during Insertion : "+err);
});
*/

/*
// Model.find() : returns a Query Object which is not a promise but is thennable
User.find({age : {$lte : 22}})
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log("Error in finding : "+err);
    });

// Model.findById() : is a thennable function used to find with respect to id
User.findById("69209d3b19689a1c401cad89")  
    .then((res)=>{
        console.log(res.name);
}).catch((err)=>{
    console.log("Error in finding by id : "+err);
});
*/

/*
// Model.update() : use to update the database takes three parameter {{filter(condition), {updation}, {option(optional)}}}
User.updateOne({age : {$gt : 23}}, {age : 50})  // updates the first matching document and returns same a query object
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log("Error in updation : "+err);
    });
// this retuns an acknowledgement response not the updated document
*/

// Model.findOneAndUpdate() and Model.findByIDAndUpadate() : 
// it returns the update document but it returns previous document so in order to get updated document add option {new : true}
User.findByIdAndUpdate("6920a66ea1377fcdc84861f5", {age : 99}, {new : true})    // by default new is false which returns non-updated document
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log("Error in finding and updating "+err);
    });

    