// timer.db.spec.js
var expect = require('chai').expect;

var db = require('./timer.db');

var insertId; // so we can delete the test create

describe('TIMER MODEL', function() {
  describe('first()', function() {
    it('returns most recent timer', function(done) {
      db.first().then(function(data) {
        // console.log(data);
        done();
      });
    });
  });

  describe('create()', function() {
    it('inserts a timer into the database', function(done) {
      db.create().then(function(data) {
        // save insertId for delete test
        insertId = data.insertId;
        // console.log(data);
        done();
      });
    });
  });

  describe('delete()', function() {
    it('deletes a timer from the database by ID', function(done) {
      db.delete(insertId).then(function(data) {
        done();
      });
    });
  });

});