var config     = require('../../config');
var mysql      = require('mysql');
var connection = mysql.createConnection(config.mysql);

var TaskModel = {

  all: function(q, done) {
    connection.query('SELECT * FROM tasks', function(err, rows) {
      done(rows);
    });
  },

  find: function(id, done) {
    connection.query('SELECT * FROM tasks WHERE id = "' + id +'"', function(err, rows, etc) {
      done(rows);
    });
  },

  add: function(task) {

  },

  update: function(task) {

  }
}

module.exports = TaskModel;