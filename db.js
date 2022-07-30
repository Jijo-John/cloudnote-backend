const mongoose = require('mongoose');
const mongoUri = "mongodb://localhost:27017/";

const connectToMongoose = ()=>{
    mongoose.connect(mongoUri, ()=>{ 
        console.log("Connected to MongoDB");
    })
}

module.exports = connectToMongoose;