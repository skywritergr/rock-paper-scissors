/*
 * This is a basic server that serves static files and hosts our API. 
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// express/connect middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// serve up static assets
app.use(express.static(path.join(__dirname, '/app')));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));

app.listen(3000);
console.log('Listening on port 3000...');