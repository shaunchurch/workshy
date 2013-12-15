var config     = require('../../config');
var mysql      = require('mysql');
var connection = mysql.createConnection(config.mysql);


var cache = {
  allAssignments: 'SELECT * FROM assignments LEFT JOIN users ON assignments.user_id = users.id LEFT JOIN tasks ON assignments.task_id = tasks.id',
}

var AssignmentModel = {

  all: function(q, done) {
    connection.query(cache.allAssignments, function(err, rows) {
      done(rows);
    });
  },

  forUser: function(q, done) {
    var query = cache.AllAssignments +
                ' WHERE users.id = ' + q;

    connection.query(query, function(err, rows) {
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

module.exports = AssignmentModel;