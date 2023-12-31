// Install express using require
const express = require('express');
// create the router using the express.Router() method
const router = express.Router();

const catFactController = require('../controllers/catFactController');



router.get("/", (req, res) => {
    const limit = req.query.limit || null;
    catFactController.getFacts(limit, res)
});

// export the router 
module.exports = router;