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

  console.log('Tasks');
  $scope.data = "Hello World!";

  comms.on('handshake', function() {
    console.log('HANDSHAKE');
  })


  comms.emit('handshake', 'From client to server');

})