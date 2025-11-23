const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
app.set("views", path.join("__dirname", "views"));
app.set("view engine", "ejs");

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