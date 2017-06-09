app.controller('MainController', function($scope) {

	$scope.subjects = {};
	
	$scope.student = {
		firstName: "Mahesh",
		lastName: "Parashar",
		fees: 500,
		subjects: [
			{name: 'Physics', marks:70},
			{name: 'Chemistry', marks:80},
			{name: 'Math', marks:65}
		],

		fullName: function() {
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		},

		addSubject: function() {
			$scope.student.subjects.push({name:$scope.subjects.name, marks:parseInt($scope.subjects.marks)});
		}
	};
});