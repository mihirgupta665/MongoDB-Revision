// number type and parsing
const mongoose = require("mongoose");

async function Main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
Main().then((res) => {
    console.log("Conncection Established");
}).catch((err)=>{
    console.log("Error in connection with database : "+err);
});



const amazonSchema = new mongoose.Schema({  // Schema is a class whose object becomes the collection schema
    title : {
        type : String,
        required : true,    // required is equivalent to "not null" of sql
    },
    author : {
        type : String,
    },
    page : {
        type : Number, 
    }
});


const Book = mongoose.model("Book", amazonSchema);  // model function generates a collection class

const book1 = new Book({title : "Merchant Of Vience", author : "Shakespear", page : 313});
const book2 = new Book({title : "The Tempest", author : "Shakespear", page : 284});
const book3 = new Book({title : "Harry Potter", author : "J.K. Rowlings", page : 778});

/*
book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("Error in inserting : "+err);
})
book2.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("Error in inserting : "+err);
})
book3.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("Error in inserting : "+err);
})
*/


