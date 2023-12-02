"use strict";
let Models = require("../models"); //matches index.js

// create the controllers to get, post, put and delete posts 
const getPosts = (res) => {
    //finds all users
    Models.Post.findAll()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

//takes two arguments (JSON and res obj) and creating new user using data created from request
const createPost = (data, res) => {
        Models.Post.create(data)
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

//this is the controller
const updatePost = (req, res) => {
    Models.Post.update(req.body, { where: { id: req.params.id}
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        });
}
const deletePost = (req, res) => {
    //deletes the user matching the ID from the param
    Models.Post.destroy({
        where: { id: req.params.id }
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