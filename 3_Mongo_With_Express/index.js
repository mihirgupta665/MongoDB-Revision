const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override"); //method override is used to use put requests



const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended : true  }));
//method override is used to use put requests
app.use(methodOverride("_method"));

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

// thenable function are await function by default so no need to await await and async keywords
// posting new chat and insertion of new chat on mongodb database
app.post("/chats", (req, res)=>{
    // req sent by post is highly secured and its must be extracted by url so express should be made capable of extarcting it.
    let {from, msg, to} = req.body;     // express.urlencoded({ extended : true })
    let newChat = new Chat({    
        from : from,
        message : msg,
        to : to,
        created_at : new Date()
    });

    newChat.save().then((res)=>{    // save is a thenaable function so awaiting for this function will take place
        console.log(res);
    }).catch((err)=>{
        console.log("Error in saving new chat : "+err);
    });

    res.redirect("/chats");
})

// edit message
app.get("/chats/:id/edit", async (req,res)=>{
    let {id} =req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat} );
    
});

//method override is used to use put requests
app.put("/chats/:id", async (req, res)=>{
    let {id} = req.params;
    let {msg : newmsg} = req.body;
    // Chat.findByIdAndUpdate is asynchronous function so await and async need to be used
    let updatedChat = await Chat.findByIdAndUpdate(id, {message : newmsg}, {runValidators : true, new : true});
    console.log(updatedChat);
    res.redirect("/chats");
});

// delete or destroy chat
app.delete("/chats/:id", async (req, res)=>{
    let {id} = req.params;
    // findByIdAndDelete is an asynchronous function so await and async keywords must be used.
    let deleteChat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});