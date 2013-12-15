var config     = require('./../config');
var mysql      = require('mysql');
var connection = mysql.createConnection(config.mysql);

module.exports = {
  connection: connection,
  Task: require('../modules/task/task.db'),
  User: require('../modules/user/user.db'),
  Assignment: require('../modules/assignment/assignment.db')
};