app.service('CalcService', function(MathProvider) {
	this.square = function(a) { return MathProvider.multiply(a, a); }
});