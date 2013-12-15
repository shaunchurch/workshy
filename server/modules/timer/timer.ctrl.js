// timer.ctrl.js

var q = require('q');
var _ = require('underscore');
var Agenda = require('agenda');
var db = require('./../../common/db');
var config = require('./../../config');

var agenda = new Agenda({db: { address: 'localhost:27017/workshy'}});

var TimerCtrl = {

	init: function() {

		agenda.define('delete old users', function(job, done) {
		  console.log('DELETE USERS');
		});

		agenda.every('10 seconds', 'delete old users');

		agenda.start();
	}

}

module.exports = TimerCtrl;