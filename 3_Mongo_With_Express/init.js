// initialise page is created to initialize te database with some sample data. 
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function Main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/sigma_whatsapp");
}
Main().then((res)=>{
    console.log("Connection Established");
}).catch((err)=>{
    console.log("Error in connection with the datacase : "+err);
})

Chat.insertMany([
    {
        from : "divyansh",
        to : "mansi",
        message : "please take your own path",
        created_at : new Date()
    },
    {
        from : "harsh",
        to : "rahul",
        message : "aur bhai kaise ho! Sab khariyat na!!!",
        created_at : new Date()
    },
    {
        from : "shivansh",
        to : "papa",
        message : "padai acchi chal rahi hai!",
        created_at : new Date()
    }
]);