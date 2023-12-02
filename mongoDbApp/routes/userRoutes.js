let express = require("express"); // require express
let router = express.Router(); // use express.Router
let Controllers = require("../controllers"); //index.js

// create the users routes using the controllers 
router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
});

router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res);
});

//put route to add new users 
router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res);
});

//delete route to delete users from the database 
router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res);
});

module.exports = router;