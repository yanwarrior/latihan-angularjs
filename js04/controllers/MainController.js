mainApp.controller("MainController", function($scope) {
	$scope.student = {
		firstName: 'Mahesh',
		lastName: 'Parasher',
		fullName: function() {
			var studentObject; 
			studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		}
	};
});