

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/employee-review")
const db = mongoose.connection;

db.on("error",  console.error.bind(console, "Error on connecting databse!"));
 
// when database is successfully connected
db.once("open", ()=>{
    console.log("Successfully connected to the MongoDB::Databse::")
});

module.exports = db;