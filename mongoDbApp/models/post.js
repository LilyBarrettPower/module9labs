//importing mongoose library and creating schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating post schema
const postSchema = new Schema({
    user_id: { type: String, trim: true, required: true },
    title: { type: String, trim: true, required: true, max: 20 },
    text: { type: String, trim: true, required: true },
    PostImageURL: { type: String, trim: true },
    likes: {type: Number},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("post", postSchema);