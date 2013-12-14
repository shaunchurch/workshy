// routes.js
var db = require('./db');
var User = db.User;
var UserCtrl = require('../modules/user/userCtrl');

module.exports = function(app, io) {
  app.get('/', function(req, res) {

    res.send('Sausages');

  });

  app.get('/users', function(req, res) {

  });

  // app.post('/users/:id', function(req, res) {
  //   User.create(/* ... */);
  // });
};