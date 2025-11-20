
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
    age: Number,
});
