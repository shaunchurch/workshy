var db = require('./db');
var User = db.User;

module.exports = function(io) {
  io.sockets.on('connection', function(socket) {

	socket.emit('handshake', 'Server to client...');

	socket.on('handshake', function(data) {
		console.log(data);
	});

  });
};
