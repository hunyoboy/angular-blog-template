'use strict';

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/'));

// All other routes should redirect to the index.html
app.route('/*')
    .get(function(req, res) {
        res.sendFile(path.resolve(__dirname + '/index.html'));
    });

app.listen(8880, function() {
    console.log('Started node server at http://localhost:8880');
});
