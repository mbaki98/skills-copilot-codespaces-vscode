// Create web server
//create a web server and listen on port 3000
//http://localhost:3000/
const express = require('express');
const app = express();
//get the comments module
const comments = require('./comments.js');

//serve static files from public folder
app.use(express.static('public'));

//use the comments module
app.use('/comments', comments);

//start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server started at port 3000');
});