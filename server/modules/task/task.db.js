var q          = require('q');
var config     = require('../../config');
var mysql      = require('mysql');
var connection = mysql.createConnection(config.mysql);

var TaskModel = {

  all: function(arg) {
    var def = q.defer();
    connection.query('SELECT * FROM tasks', function(err, rows) {
      if(err) def.reject(err);
      def.resolve(rows);
    });
    return def.promise;
  },

  find: function(id) {
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

module.exports = TaskModel;