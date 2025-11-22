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

