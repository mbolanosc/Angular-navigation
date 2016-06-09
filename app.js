angular.module('routes',['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when("/", {
              templateUrl: "index.html"
            })
			.when('/songs',{
				templateUrl: "views/songs.html"
			})
			.when('/contactUs',{
				templateUrl: "views/contact.html"
			})
			.otherwise({
				 redirectTo: '/'
			});
	});