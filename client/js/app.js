var is = angular.module('is', ['ngRoute', 'angular-inview', 'ngScroller', 'chart.js', 'mm.foundation', 'angular-memory-stats']);

is.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', { templateUrl: 'partials/title.html' })
		.when('/solution1', { templateUrl: 'partials/solution1.html', controller: 'solution1Controller' })
		.when('/solution2', { templateUrl: 'partials/solution2.html', controller: 'solution2Controller' })
	    .when('/analysis', { templateUrl: 'partials/analysis.html', controller: 'analysisController' })
});
