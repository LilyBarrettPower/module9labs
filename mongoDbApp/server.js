const express = require("express"); // require express
const app = express(); // create the express application 
require("dotenv").config(); // require dotenv to use the environment variables 

let dbConnect = require('./dbConnect') // require db after the dotenv because db uses dotenv 

app.use(express.json());

//create a route for users
let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes)

//create a route for posts
let postRoutes = require('./routes/postRoutes');
app.use('/api/posts', postRoutes)

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my MongoDB application."
    });
});

//set the port using either the environment variable for default 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});