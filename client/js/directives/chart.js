is.directive('chart', function(githubApiService) {
	return {
		restrict: 'E', 
		template: '<canvas id="radar" class="chart chart-radar" chart-data="data" chart-labels="labels"></canvas> ',
		link: function(scope, elem, attrs) {
				githubApiService.repo('jankuca', 'ng-scroller').then(function(json) {
					scope.labels = ['stargazers_count', 'watchers_count', 'forks_count', 'subscribers_count'];
					scope.data = json;
					scope.series = ['Series A', 'Series B'];
					console.log(scope.data);
				});
		}
	}
})