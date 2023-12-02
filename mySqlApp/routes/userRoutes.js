const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// create the routes to get, post, put and delete users using the userController
router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
});

router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res)
});

router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res);
});

router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res);
});

module.exports = router;