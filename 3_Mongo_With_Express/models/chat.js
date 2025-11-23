const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required :true
    },
    to : {
        type : String,
        required : true
    },
    message : {
        type : String,
        maxLength : 50
    },
    created_ad : {
        type : Date,
        required: true
    }
})

