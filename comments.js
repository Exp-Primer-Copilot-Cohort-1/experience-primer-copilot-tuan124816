// Create web server and listen to port 3000
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var port = 3000;

// Read comments from file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Use body-parser to parse the body of HTTP requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Create route for GET requests to /comments
app.get('/comments', function(req, res) {
  res.setHeader('Cache-Control', 'no-cache');
  res.json(comments);
});

// Create route for POST requests to /comments
app.post('/comments', function(req, res) {
  // Add comment from POST request to comments array
  comments.push(req.body);
  // Write comments to file
  fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
    if (err) {
      console.error(err);
    }
    res.setHeader('Cache-Control', 'no-cache');
    res.json(comments);
  });
});

// Create web server and listen to port 3000
app.listen(port, function() {
  console.log('Server started: http://localhost:' + port + '/');
});