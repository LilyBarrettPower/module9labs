
// include express using require
const express = require('express');

const serverApp = express();
const catFactRoute = require('./routes/catFactRoute');
// choose the port for the server to run on
const port = 3004;

serverApp.use(express.json());

// use the routes
serverApp.use('/api/catfacts', catFactRoute);



// Start the server as log a message to the console 
serverApp.listen(port, () => console.log(`Server running on http://localhost:${port}`));