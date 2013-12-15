// assignment.ctrl.js

var q = require('q');
var _ = require('underscore');
var db = require('./../../common/db');

var AssignmentCtrl = {

	getAllData: function() {
		var promise = q.all([db.User.all(), db.Task.all()]);
		return promise;
	},

	randomise: function() {
		var defer = q.defer();
		var out = [];

		var data = q.all([
			db.User.all(),
			db.Task.all()
		]);

		data.then(function(data) {

			var users = _.shuffle(data[0]);
			var tasks = _.shuffle(data[1]);

			var u = 0;
			while(tasks.length > 0) {
				out.push({
					user: users[users.length - u - 1],
					task: tasks.pop()
				});

				if(u < users.length - 1) u++;
				else u = 0;
			}

			defer.resolve(out);

		});
		return defer.promise;
	},

	randomiseGrouped: function() {
		var defer = q.defer();

		AssignmentCtrl.randomise().then(function(data) {
			data = _.groupBy(data, function(item) { return item.user.id });
			defer.resolve(data);
		});

		return defer.promise;
	},

	buildAssignmentView: function() {

		var defer = q.defer();

		AssignmentCtrl.randomiseGrouped().then(function(data) {
			defer.resolve(data);
		});

		return defer.promise;

	}

}

module.exports = AssignmentCtrl;