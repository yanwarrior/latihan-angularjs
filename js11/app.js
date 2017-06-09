var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/addStudent', {
		templateUrl: 'resources/addStudent.html',
		controller: 'StudentControllerAdd'
	}).

	when('/viewStudents', {
		templateUrl: 'resources/viewStudents.html',
		controller: 'StudentControllerView'
	}).

	otherwise({
		redirectTo: '/addStudent'
	});


}]);