// user.db.spec.js

var assert = require("assert");
var db = require('./user.db.js');

describe('USER MODEL', function() {
  describe('Retrieve a list of users', function() {
    it('returns an array of user objects', function(done) {

      db.all(0).then(function(data) {
          assert.equal('Shaun Church', data[0].name);
          done();
        },
        console.error);

    });
  });

  describe('Retrive a single user object', function(){
    it('returns a single user object by id', function(done){

      db.find(1).then(function(data) {
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