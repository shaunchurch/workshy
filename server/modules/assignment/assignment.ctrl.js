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

		this.getAllData().then(function(data) {

			var users = _.shuffle(data[0]);
			var tasks = _.shuffle(data[1]);

			var u = 0;
			while(tasks.length > 0) {
				out.push({
					user: users[users.length - u - 1].id,
					task: tasks.pop().id
				});

				if(u < users.length - 1) u++;
				else u = 0;
			}

			defer.resolve(out);

		});
		return defer.promise;
	}

}

module.exports = AssignmentCtrl;
