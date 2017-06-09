var app = angular.module('app', []);

app.config(function($provide) {
	$provide.provider('MathService', function() {

		this.$get = function() {
			var factory = {};
			factory.multiply = function(a, b) {
				return a * b;
			}

			return factory;
		}

	});
});


app.value("defaultInput", 5);

