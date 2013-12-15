var config     = require('../../config');
var mysql      = require('mysql');
var connection = mysql.createConnection(config.mysql);

var UserModel = {

	all: function(req, done) {
    connection.query('SELECT * FROM users', function(err, rows) {
      done(rows);
    });
	},

  find: function(id, done) {
    connection.query('SELECT * FROM users WHERE id = "' + id +'"', function(err, rows, etc) {
      console.log('FIND ');
      console.log(id);
      console.log(rows);
      done(rows);
    });
  },

  add: function(task) {

  },

  update: function(task) {

  }
}

module.exports = UserModel;