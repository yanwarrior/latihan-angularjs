app.controller('StudentControllerAjax', function($scope, $http) {
	var url = "resources/10.json";
	$http.get(url).then(function(response) {
		$scope.students = response.data;
	});
});