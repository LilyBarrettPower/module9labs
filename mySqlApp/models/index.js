'use strict'
const User = require('./user') //require the model
const Post = require('./post')

async function init() {
    await User.sync(); //sync the model
    await Post.sync();
};
init();
module.exports = {
    User, //export the model
    Post
};