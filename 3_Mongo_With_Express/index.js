const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

async function Main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/sigma_whatsapp");
}
Main().then((res)=>{
    console.log("Connection Established");
}).catch((err)=>{
    console.log("Error during connetion with the database : "+err);
})

app.listen(8080, ()=>{
    console.log("Listening through port 8080...");
})

app.get("/", (req, res)=>{
    res.send("Server is working fine");
});

/*
chat1 = new Chat({
    from : "Mihir",
    to : "Vaishali",
    message : "Lets connect database to frontend using express server...",
    created_at : new Date()  //new Date() : creates a random date and time in accordance with utc.
});
chat1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("Error in instertion : "+err);
});
*/

// index all chat
app.get("/chats", async (req, res)=>{
    let chats = await Chat.find();    // note : Chat.find() is a asynchronous function so await and async will be used
    // console.log(chats);
    res.render("index", {chats});
})

// create new chat
app.get("/chats/new", (req,res)=>{
    res.render("new");
})