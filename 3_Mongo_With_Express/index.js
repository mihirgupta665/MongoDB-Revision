const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
app.set("views", path.join("__dirname", "views"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.send("Server is working fine");
});