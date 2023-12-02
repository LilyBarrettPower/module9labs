"use strict";
let Models = require("../models"); //matches index.js

// create the controllers to get, post, put and delete users 
const getUsers = (res) => {
    //finds all users
    Models.User.findAll()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const createUser = (data, res) => {
    Models.User.create(data)
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

//this is the controller
const updateUser = (req, res) => {
    Models.User.update(req.body, {
        where: { id: req.params.id }
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        });
}
const deleteUser = (req, res) => {
    //deletes the user matching the ID from the param
    Models.User.destroy({
        where: { id: req.params.id }
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};
