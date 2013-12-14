angular.module('workshy', [
  	'ui.router',
  	'workshy.tasks',
  	'services.comms'
])

.config(function($stateProvider, $urlRouterProvider){
      // For any unmatched url, send to /
      $urlRouterProvider.otherwise('/');
})

.run( function run () {
	console.log('workshy');
})

.controller('AppCtrl', function AppCtrl( $scope, $location, comms ) {
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		console.log('State change success');
		// if( angular.isDefined( toState.data.pageTitle) ) {
		// 	$scope.pageTitle = toState.data.pageTitle = ' | Workshy';
		// }
	});
});