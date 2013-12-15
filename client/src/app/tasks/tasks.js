// tasks.js

angular.module('workshy.tasks', [])

// set up our module
.config(function($stateProvider, $urlRouterProvider){

  // routes
  $stateProvider
    .state('tasks', {
      url: '/tasks',
      templateUrl: 'src/app/tasks/tasks.tpl.html',
      controller: 'TasksCtrl'
    })
})

.controller('TasksCtrl', function TasksController ($scope, comms) {

  $scope.comms = comms;

  // request data
  comms.get('users');
  // comms.get('tasks');
  // comms.get('assignments');

  comms.get('user', 1);


  $scope.updateUsers = function(data) {
    console.log('SOMETHING HERE');
    console.log(data);
  }

  $scope.data = "Hello World!";

  comms.on('handshake', function() {
    console.log('HANDSHAKE');
  })

  comms.on('tasks', function(data) {
    console.log(data);
    $scope.tasks = data;
  });

  comms.on('users', function(data) {
    $scope.users = data;
  });

  comms.on('assignments', function(data) {
    console.log('assignments');
    $scope.assignments = data;
  });

  comms.emit('handshake', 'From client to server');

})