var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workshy');


module.exports = {
  User: require('../db/user'),
  Task: require('../db/task')
};