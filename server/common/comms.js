var db = require('./db');
var socket;

var map = {
  tasks: db.Task.all,
  task: db.Task.find,
  users: db.User.all,
  user: db.User.find,
  assignments: db.Assignment.all
}

module.exports = {
	connect: function(io) {
    io.sockets.on('connection', function(sock) {
      socket = sock;

      // handle socket data requests
      socket.on('get', function(req) {
        console.log(req.request);
        if(map[req.request]) map[req.request](req, function(res) {
          console.log('EMIT ' + req.request);
          socket.emit(req.request, res);
        });
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