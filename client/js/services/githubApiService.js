is.service('githubApiService', function($http) {
	this.repo = function(user, repo) {
		var promise = $http.get('https://api.github.com/repos/' + user + '/' + repo).then(function(json) {
			return [ json.data.stargazers_count, 
					 json.data.watchers_count, 
					 json.data.forks_count, 
					 json.data.subscribers_count
				   ];
		});

		return promise;
	};
})