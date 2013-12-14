var mongoose = require('mongoose');
mongoose.connect('localhost');

module.exports = {
  User: require('../modules/user/user.db'),
  Task: require('../modules/task/task.db')
};