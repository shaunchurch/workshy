var db = require('./db');
var User = db.User;

module.exports = function(io) {
  io.sockets.on('connection', function(socket) {

    socket.on('someEvent', function() {
      User.find(/* ... */);
    });

  });
};
