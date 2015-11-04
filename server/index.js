'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var server = http.createServer(app);
var config = require('./config/environment');
var session = require('express-session');
var morgan = require('morgan');
var ejs = require('ejs');
var path = require('path');
var setup = require('./config/setup');
var async = require('async');
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Misc Setup

app.set('port', process.env.port || 3000);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname + '../..', 'client')));

// Application routes
function routeFile(url, uri) {
  router.get(url, function(req, res) {
    res.sendFile(path.resolve(uri));
  });
};

function routeJson(url, json) {
	router.get(url, function(req, res) {
		res.jsonp(json);
	})
}

routeFile('/', 'client/index.html');
app.use('/', router);

routeFile('/solution3', 'client/partials/solution3.html');
app.use('/solution3', router);


server.listen(config.port, function() {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});