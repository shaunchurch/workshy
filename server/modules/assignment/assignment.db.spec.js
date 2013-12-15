// assignment.db.spec.js

// var assert = require("assert");
var expect = require('chai').expect;

var db = require('./assignment.db');

describe('ASSIGNMENT MODEL', function() {
  describe('Retrieve assignments', function() {
    it('should return an array of assignment objects', function(done) {
      db.all(0).then(function(data) {
        expect(data).to.be.instanceOf(Array);
        expect(data[0]).to.be.instanceOf(Object);
        done();
      });
    });

    it('should return an array of assignment objects for a specific user', function(done) {
      db.forUser(1).then(function(data) {
        expect(data).to.be.instanceOf(Array);
        expect(data[0]).to.be.instanceOf(Object);
        expect(data[0].user_id).to.equal(1);
        done();
      });
    });
  });
});