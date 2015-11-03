is.controller('comparisonController', function($scope, $http) {
	
	var url = 'https://api.github.com/search/repositories?q=';
	
	$http.get(url + 'ng-scroller').then(function(json) {
		console.log(json);
		$scope.ngScroller = json;
	});	

	$http.get(url + 'angular+infinite-scroll').then(function(json) {
		console.log(json);
		$scope.ngScroller = json;
	});	

    
	
	})