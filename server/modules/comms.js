// var db = require('./db');
// var User = db.User;

module.exports = function(io) {
  io.sockets.on('connection', function(socket) {
  	console.log('CONNECTION');
  	socket.emit('handshake', 'Connection initiated');

  });
};
