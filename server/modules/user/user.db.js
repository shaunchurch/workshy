var q          = require('q');
var config     = require('../../config');
var mysql      = require('mysql');
var connection = mysql.createConnection(config.mysql);

var UserModel = {

	all: function(req) {

    var deferred = q.defer();
    connection.query('SELECT * FROM users', function(err, rows) {
      if(err) deferred.reject(err);
      else deferred.resolve(rows);
    });
    return deferred.promise;
	},

  find: function(id) {
    var deferred = q.defer();
    connection.query('SELECT * FROM users WHERE id = "' + id +'"', function(err, rows, etc) {
      if(err) deferred.reject(err)
      deferred.resolve(rows);
    });
    return deferred.promise;
  },

  add: function(task) {

  },

  update: function(task) {

  }
}

module.exports = UserModel;