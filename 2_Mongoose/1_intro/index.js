
const mongoose = require("mongoose"); 
// mongoose helps js to connect with the mongodb database 
async function main(){ 
    await mongoose.connect("mongodb://127.0.0.1:27017/test"); // the url indicates which database to be conected 
    // connect with mongodb localhost port database(which you want to use) 
} 
main()
    .then(()=>{ 
        console.log("connection established"); 
    })
    .catch((err)=>{ 
        console.log(err); 
    });