"use strict";
let Models = require("../models"); //matches index.js

const getPosts = (res) => {
    //finds all users
    Models.Post.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

//takes two arguments (JSON and res obj) and creating new user using data created from request
const createPost = (data, res) => {
    //creates a new user using JSON data from request body
    console.log(data)
    new Models.Post(data)
        .save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

//this is the controller
const updatePost = (req, res) => {
    //updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)

    Models.Post.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        });
}
const deletePost = (req, res) => {
    //deletes the user matching the ID from the param
    Models.Post.findByIdAndDelete(req.params.id, req.body, {
        useFindAndModify: false,
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
};