// assignment.ctrl.spec.js

// var assert = require("assert");
var expect = require('chai').expect;

var ctrl = require('./assignment.ctrl');

describe('ASSIGNMENT CONTROLLER', function() {
  describe('Promise works', function() {
    it('should work', function(done) {
      ctrl.randomise().then(function(data) {
      	console.log(data);
        done();
      });
    });
  });
});