// assignment.db.spec.js

var assert = require("assert");

var db = require('./assignment.db.js');

describe('ASSIGNMENT DB', function() {
  describe('Retrieve a list of assignments', function() {
    it('should return an array of assignment objects', function(done) {
      db.all(0, function(data) {
        // assert.array(data);
        // data[0].should.equal(-1);
        // expect([1,2,3].indexOf(4)).should.equal(-1);

        done();
      });
    });
  });

  // describe('Retrive a single assignment object', function(){
  //   it('should return a assignment object on query', function(done){
  //     db.find(1, function(data) {
  //       assert.equal('Clean Kitchen', data[0].title);
  //       done();
  //     });
  //   });
  // });

  // describe('Add a assignment to the database.', function() {
  //   it('should return a success response', function(done) {
  //     // done();
  //   });
  // })
});