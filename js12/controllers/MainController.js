app.controller('ShapeController', function($scope) {
	$scope.message = "In shape controller";
	$scope.type = "Shape";
});

app.controller('CircleController', function($scope) {
	$scope.message = "In circle controller";
});

app.controller('SquareController', function($scope) {
	$scope.message = "In square controller";
	$scope.type = "Square";
})