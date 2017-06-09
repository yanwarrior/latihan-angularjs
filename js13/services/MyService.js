app.factory('MathFactory', function() {
	var factory = {};

	// atau bisa dengan seperti ini
	// ============================
	// var factory = {
	// 	multiply: function(a, b) {
	// 		return a * b;
	// 	}
	// };

	factory.multiply = function(a, b) { return a * b};

	return factory;
});

app.service('CalcService', function(MathFactory) {
	this.square = function(a) { return MathFactory.multply(a,a) };
})