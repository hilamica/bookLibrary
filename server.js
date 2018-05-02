const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/booksList', function (req, res) {
    const books = require(path.join(__dirname + '/dist/assets/db.json'));
    res.setHeader('Content-Type', 'application/json');
    res.send(books.booksList);
});

app.listen(process.env.PORT || 8080);


