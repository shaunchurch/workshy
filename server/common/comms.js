var db = require('./db');
var ctrl = require('./ctrl');

var socket;

var map = {
  tasks: db.Task.all,
  task: db.Task.find,
  users: db.User.all,
  user: db.User.find,
  assignments: ctrl.Assignment.buildAssignmentView
}

module.exports = {
	connect: function(io) {
    io.sockets.on('connection', function(sock) {
      socket = sock;

      // handle socket data requests
      socket.on('get', function(req) {
        console.log(req.request);
        if(map[req.request]) map[req.request](req).then(function(res) {
          console.log('EMIT ' + req.request);
          socket.emit(req.request, res);
        }, console.error);
      });

    });
  },

  emit: function(event, message) {
    socket.emit(event, message);
  },

  on: function(event, callback) {
    socket.on(event, callback);
  }
};