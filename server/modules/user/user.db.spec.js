// user.db.spec.js

var assert = require("assert");
var db = require('./user.db.js');

describe('USER MODEL', function() {
  describe('Retrieve a list of users', function() {
    it('should return an array of user objects', function(done) {

      db.all(0).then(function(data) {
          assert.equal('Shaun Church', data[0].name);
          done();
        },
        console.error);

      // db.all(0, function(data) {
      //   assert.equal('Shaun Church', data[0].name);
      //   done();
      // });
    });
  });

  describe('Retrive a single user object', function(){
    it('should return a user object on query', function(done){

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