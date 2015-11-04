is.controller('analysisController', function($scope, githubApiService) {

	// githubApiService.repo('jankuca', 'ng-scroller').then(function(json) {
	// 	$scope.labels = ['stargazers_count', 'watchers_count', 'forks_count', 'subscribers_count'];
	// 	$scope.data = json;
	// 	console.log($scope.data);
	// });
 	
 	$scope.labels = ['stargazers_count', 'watchers_count', 'forks_count', 'subscribers_count'];

 	$scope.series = ['ng-infinite-scroll', 'ng-scroller', 'angular-inview']
  
	$scope.data = [
		[2121, 2121, 513, 83],
		[192, 192, 27, 20],	
	    [250, 250, 43, 250]
	 ];

	 

});
