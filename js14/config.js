app.config(function($provide) {

	$provide.provider('MathProvider', function() {
		
		// make a factory/service using provider.
		this.$get = function() {
			var factory = {};
			factory.multiply = function(a, b) {
				return a * b;
			}

			return factory;
		}

	});


});