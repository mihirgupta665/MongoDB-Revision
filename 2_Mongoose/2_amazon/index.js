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
        // adding custom error using array with one as value and second as message
        min: [1, "Very few pages..."]   // cutom exception could also be passed the key validator value 
    },
    genre : [String], // array of string are only possible 
    category : {
        type : String,
        enum : ["fictional", "non-fictional"],   // the value for this category must be in this enum only
        default : "fictional"   // add default value to the key if value not specified explicitly
    }
});


const Book = mongoose.model("Book", amazonSchema);  // model function generates a collection class

/*
const book1 = new Book({ title: "Merchant Of Vience", author: "Shakespear", page: 313, category : "fictional" });
const book2 = new Book({title : "The Tempest", author : "Shakespear", page : 284, category : "non-fictional"});
const book3 = new Book({ title: "Harry Potter", author: "J.K. Rowlings", page: 778, genre: ["comic", "superhero", "survival"] });

book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("Error in inserting : "+err);
})
book2.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    // err.error.category.properties.message : is used to retrieve a specific error specification.
    console.log("Error in inserting : "+err);
})
book3.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("Error in inserting : "+err);
})
*/

// by default the validator do not validate on the update operation.
// runValidators : in order to apply valitors validation on updatation one option is added i.e runValidators : true
Book.findByIdAndUpdate("692234947cb0cf220ca6bbd5", {page : 425}, {runValidators : true})    // runValidators : true -> ensure that all the data is validated through validators
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err.errors);
    }); 



