// essentials
var fs = require('fs');
var http = require('http');

// frameworks
var express = require('express');
var sio = require('socket.io');

// app config
var config = require('./config');

// modules
var db = require('./common/db');
// var routes = require('./common/routes');
var comms = require('./common/comms');

// check db is running
db.connection.connect(function(err) {
	if(err) process.exit();
	init();
});

function init() {
	// initialise app
	var app = express();

	// initialise server
	var server = http.createServer(app);

	// initialise socket
	var io = sio.listen(server);

	// set up app
	app.use(express.logger());                                  // Log requests to the console
	app.use(express.bodyParser());                              // Extract the data from the body of the request - this is needed by the LocalStrategy authenticate method
	app.use(express.cookieParser(config.server.cookieSecret));  // Hash cookies with this secret
	app.use(express.cookieSession());                           // Store the session in the (secret) cookie

	// hook up view renderer with ejs
	// app.set('views', __dirname + '/../client/src');
	// app.engine('html', require('ejs').renderFile);

	// serve all files in client src dir
	app.use('/', express.static(__dirname + '/../client'));

	// initialise routes
	// routes(app, io);

	// inititialise comms
	comms.connect(io);

	// standard error handler, 500
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

	// listen
	server.listen(config.server.listenPort, '0.0.0.0', 511, function() {
		console.log('Workshy Server listening on port ' + config.server.listenPort);
	});

}
