// user.db.spec.js

var assert = require("assert");
var db = require('./user.db.js');

describe('USER DB', function() {
  describe('Retrieve a list of users', function() {
    it('should return an array of user objects', function(done) {
      db.all(0, function(data) {
        assert.equal('Shaun Church', data[0].name);
        done();
      });
    });
  });

  describe('Retrive a single user object', function(){
    it('should return a user object on query', function(done){
      db.find(1, function(data) {
        assert.equal('Shaun Church', data[0].name);
        done();
      });
    });
  });

  // describe('Add a user to the database.', function() {
  //   it('should return a success response', function(done) {
  //     // done();
  //   });
  // })
});