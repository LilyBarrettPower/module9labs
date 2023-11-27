'use strict';
const Mongoose = require('mongoose'); // require Mongoose that we installed using npm install mongoose --save

const uri = process.env.DB_URI || "mongodb://localhost:27017/blogDB"; // URI from mongo compass

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//Connect to MongoDB
Mongoose.connect(uri, mongooseOptions)
    .then(() => console.log('MongoDB Connected')) //if connection is successful, a success message is displayed 
    .catch(error => console.log('MongoDB Error: ' + error.message)); // if connection is unsucessful an error message is displayed

// Get the default connection
const db = Mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error: "));
exports.Mongoose = Mongoose;