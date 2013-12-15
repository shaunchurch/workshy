var q          = require('q');
var config     = require('../../config');
var mysql      = require('mysql');
var connection = mysql.createConnection(config.mysql);

var TimerModel = {

  first: function(req) {
    var defer = q.defer();
    connection.query('SELECT * FROM timers LIMIT 1', function(err, rows) {
      if(err) defer.reject(err);
      defer.resolve(rows);
    });
    return defer.promise;
  },

  create: function() {
    var defer = q.defer();
    connection.query('INSERT INTO timers (timestamp,function) VALUES (now(), "something")', function(err, rows) {
      if(err) defer.reject(err);
      defer.resolve(rows);
    });
    return defer.promise;
  },

  delete: function(id) {
    var defer = q.defer();
    connection.query('DELETE FROM timers WHERE id = ' + id, function(err, rows) {
      if(err) defer.reject(err);
      defer.resolve(rows);
    });
    return defer.promise;
  }
}

module.exports = TimerModel;