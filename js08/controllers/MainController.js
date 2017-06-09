app.controller('StudentController', function($scope) {
	$scope.reset = function() {
		$scope.firstName = "Mahesh";
		$scope.lastName = "Parashar";
		$scope.email ="maheshparashar@mail.com";
	};

	$scope.reset();
});