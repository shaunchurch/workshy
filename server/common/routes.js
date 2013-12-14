// routes.js
var db = require('./db');
var User = db.User;

module.exports = function(app, io) {
  // app.get('/', function(req, res) {

    

  // });

  app.get('/users', function(req, res) {
  	res.send('Users');
  });

  // app.post('/users/:id', function(req, res) {
  //   User.create(/* ... */);
  // });
};