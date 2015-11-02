is.controller('solution2Controller', function($scope, $timeout, Reddit) {
	$scope.reddit = new Reddit();
	$scope.limit = 50;
	$scope.increaseLimit = function (increases) {
		if (increases) {
			$timeout(function() {
				$scope.limit = $scope.limit + 50;
				$scope.reddit.nextPage();
			}, 0)
		}
	}
});
