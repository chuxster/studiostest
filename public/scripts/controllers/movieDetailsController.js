'use strict';

/* Controllers */
var app = angular.module('studiostest');

app.controller('MovieDetailsController',['$scope', 'MoviesFactory', '$routeParams',
    function($scope, MoviesFactory, $routeParams) {
        $scope.item = {};
        $scope.fallBackImage = 'http://placehold.it/195x292';
        
        /**
         * Init. Load movie using slug id
         */
        $scope.init = function() {
            if ($routeParams.slug) {
                MoviesFactory.getMovieBySlug($routeParams.slug).then(function(data) {
                    if (data.length) {
                        $scope.item = data[0];
                    }
                });
            }
        };

        // Init
        $scope.init();
    }
]);