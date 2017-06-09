app.controller('StudentController', function($scope) {
	$scope.student = {
		firstName: "Mahesh",
		lastName: "Parashar",
		fees: 600,

		subjects: [
			{name:'Physics', marks:70},
			{name:'Chemistry', marks:80},
			{name:'Math', marks:65},
			{name:'English', marks:75},
			{name:'Indonesian', marks:67},
		],

		fullName: function() {
			var studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		}
	}
});