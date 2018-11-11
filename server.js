var express = require('express');
var app = express();
var bodyParser    = require('body-parser');

app.use(bodyParser.json());// for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));
app.use('/*', express.static(__dirname + '/public'));
var gulp = require('gulp'); // Load gulp
require('./gulpfile');
gulp.start('config');

var port = process.env.PORT || 3000;


app.listen(port);