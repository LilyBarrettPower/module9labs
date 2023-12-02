let express = require("express"); // require express
let router = express.Router(); // use express.Router
let Controllers = require("../controllers"); //index.js

// create the post routes using the controllers
router.get('/', (req, res) => {
    Controllers.postController.getPosts(res);
});

router.post('/create', (req, res) => {
    Controllers.postController.createPost(req.body, res);
});

//put used to create new posts
router.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req, res);
});

// delete used to delete posts 
router.delete('/:id', (req, res) => {
    Controllers.postController.deletePost(req, res);
});

module.exports = router;