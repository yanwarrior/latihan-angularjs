app.directive('student', function() {
	var directive = {};

	directive.restrict = 'E';

	directive.scope = {
		student: "=name"
	};
	
	directive.template = "Student: <b>{{ student.name }}</b>, Roll No: <b>{{ student.rollno }}</b>";
	

	directive.compile = function(element, attributes) {
		element.css('border', '1px solid gray');
		var linkFunction = function($scope, element, attributes) {
			element.html("Students: <b>" + $scope.student.name + "</b>, Roll No: <b>" + $scope.student.rollno + "</b>");
			element.css("background-color", "#ff00ff");
		}
		return linkFunction;
	}

	return directive;
});