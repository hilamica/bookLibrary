//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/booksList', function (req, res) {
    const books = require(path.join(__dirname + '/dist/assets/db.json'));
    res.setHeader('Content-Type', 'application/json');
    res.send(books);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);


// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);