const mongoose = require("mongoose"); // require mongoose
const Schema = mongoose.Schema; // create schema using built in mongoose features

// creating user schema
const userSchema = new Schema({
    userName: { type: String, trim: true, required: true, unique: true },
    email: { type: String, trim: true, required: true },
    password: { type: String },
    profilePicture: { type: String }
});

module.exports = mongoose.model("user", userSchema);

