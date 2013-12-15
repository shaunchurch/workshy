// assignment.ctrl.js

var q = require('q');
var db = require('./../../common/db');

var AssignmentCtrl = {

	randomise: function() {

		// var defer = q(db.User.all(0, function(data) {
		// 	console.log(data);
		// })).then(function() {

		// });

		var defer = q.defer();

		db.User.all(0)
			.then(function(data) {
				return db.Task.all(0);
			})
			.then(function(data) {
				defer.resolve(data);
			});

		//.then(function() {
			// 	console.log('show data');
			// 	console.log(data);
			// 	done();
		// });

		return defer.promise;
	}

}

module.exports = AssignmentCtrl;
