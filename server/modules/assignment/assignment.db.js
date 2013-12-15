var q = require('q');
var config     = require('../../config');
var mysql      = require('mysql');
var connection = mysql.createConnection(config.mysql);


var cache = {
  allAssignments: 'SELECT * FROM assignments LEFT JOIN users ON assignments.user_id = users.id LEFT JOIN tasks ON assignments.task_id = tasks.id',
}

var AssignmentModel = {

  all: function(arg) {

    var def = q.defer();
    connection.query(cache.allAssignments, function(err, rows) {
      if(err) def.reject(err);
      def.resolve(rows);
    });
    return def.promise;
  },

  forUser: function(arg) {
    var def = q.defer();
    var query = cache.allAssignments +
                ' WHERE users.id = ' + arg;

    connection.query(query, function(err, rows) {
      if(err) def.reject(err);
      def.resolve(rows);
    });
    
    return def.promise;
  },

  find: function(id, done) {
    var def = q.defer();
    connection.query('SELECT * FROM tasks WHERE id = "' + id +'"', function(err, rows, etc) {
      if(err) def.reject(err);
      def.resolve(rows);
    });
    return def.promise;
  },

  add: function(task) {

  },

  update: function(task) {

  }
}

module.exports = AssignmentModel;