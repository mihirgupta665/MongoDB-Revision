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

