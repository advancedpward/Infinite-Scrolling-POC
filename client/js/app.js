var is = angular.module('is', ['ngRoute', 'angular-inview', 'tc.chartjs']);

is.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/solution1', { templateUrl: 'partials/solution1.html', controller: 'solution1Controller' })
		.when('/solution2', { templateUrl: 'partials/solution2.html', controller: 'solution2Controller' })
	    .when('/solution3', { templateUrl: 'partials/solution3.html' })
	    .when('/comparison', { templateUrl: 'partials/comparison.html', controller: 'comparisonController' })
});
