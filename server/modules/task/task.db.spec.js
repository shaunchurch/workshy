// task.db.spec.js

var assert = require("assert");
var db = require('./task.db.js');

describe('TASK DB', function() {
  describe('Retrieve a list of tasks', function() {
    it('should return an array of task objects', function(done) {
      db.all(0, function(data) {
        assert.equal(data[0].title, 'Clean Kitchen');
        done();
      });
    });
  });

  describe('Retrive a single task object', function(){
    it('should return a task object on query', function(done){
      db.find(1, function(data) {
        assert.equal(data[0].title, 'Clean Kitchen');
        // assert.typeOf('array', data);
        done();
      });
    });
  });

  // describe('Add a task to the database.', function() {
  //   it('should return a success response', function(done) {
  //     // done();
  //   });
  // })
});