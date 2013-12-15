// task.db.spec.js

var assert = require("assert");
var db = require('./task.db.js');

describe('TASK MODEL', function() {
  describe('Retrieve a list of tasks', function() {
    it('returns an array of task objects', function(done) {
      db.all(0).then(function(data) {
        assert.equal(data[0].title, 'Clean Kitchen');
        done();
      });
    });
  });

  describe('Retrive a single task object', function(){
    it('returns a task object on query', function(done){
      db.find(1).then(function(data) {
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