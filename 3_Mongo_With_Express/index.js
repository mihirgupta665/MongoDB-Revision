const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
app.set("views", path.join("__dirname", "views"));
app.set("view engine", "ejs");



app.listen(8080, ()=>{
    console.log("Listening through port 8080...");
})

app.get("/", (req, res)=>{
    res.send("Server is working fine");
});