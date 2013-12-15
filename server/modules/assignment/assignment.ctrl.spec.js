// assignment.ctrl.spec.js
var expect = require('chai').expect;

var ctrl = require('./assignment.ctrl');

describe('ASSIGNMENT CONTROLLER', function() {
  describe('getAllData', function() {
    it('returns an array containing a user object and tasks object', function(done) {

      ctrl.getAllData().then(function(data) {
        expect(data).to.be.instanceOf(Array);
        expect(data[0]).to.be.instanceOf(Object);
        expect(data[1]).to.be.instanceOf(Object);
        done();
      });
    
    });

  });
  describe('randomise()', function() {
    it('returns an array of assignments for users and tasks', function(done) {
        ctrl.randomise().then(function(data) {

            expect(data).to.be.an('array');
            expect(data[0]).to.be.an('object');
            expect(data[0].user.id).to.be.a('number');
            expect(data[0].task.id).to.be.a('number');

            done();
        });
    });
  });
  describe('randomiseGrouped()', function() {
    it('returns an array of assignments for users and tasks grouped by User', function(done) {
        ctrl.randomiseGrouped().then(function(data) {

            expect(data).to.be.an('object');
            expect(data['1']).to.be.an('array');

            done();
        });
    });
  });

  describe('buildAssignmentView()', function() {
    it('returns an array of data formatted for display on the assignment view', function(done) {
        ctrl.buildAssignmentView().then(function(data) {

            console.log(data);

            done();
        });
    });
  });
});