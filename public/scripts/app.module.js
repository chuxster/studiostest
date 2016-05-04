angular.module('studiostest',['ngRoute','ui.bootstrap'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/movies', {
                templateUrl: 'movies.html',
                controller: 'MoviesController'
            })
            .when('/movie/:slug', {
                templateUrl: 'movie-detail.html',
                controller: 'MovieDetailsController'
            })
            .otherwise({redirectTo: '/movies'});

        $locationProvider.html5Mode(true);
    }
);