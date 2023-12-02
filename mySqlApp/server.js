const express = require("express");
const app = express();
require("dotenv").config();
// parse requests of content-type - application / json

let dbConnect = require("./dbConnect") // require db connect after requiring dotenv because db connect uses dotenv 

app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my mySQL application." });
});
// use the user Routes
let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)
// use the post routes
let postRoutes = require('./routes/postRoutes')
app.use('/api/posts', postRoutes)

    // set port, listen for requests
    const PORT = process.env.DB_PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });