'use strict';

/* Controllers */
var app = angular.module('studiostest');

app.controller('MoviesController',['$scope', 'MoviesFactory',
    function($scope, MoviesFactory) {
        $scope.items = null;
        $scope.fallBackImage = 'http://placehold.it/195x292';
        $scope.filteredMovieItems = [];
        $scope.currentPage = 1;
        $scope.numPerPage = 5;
        $scope.maxSize = 5;
        $scope.itemsBegin = 0;
        $scope.itemsEnd = 0;

        // Watchers
        $scope.$watch('currentPage + numPerPage', function() {
            $scope.updateMovieItems();
        });

        /**
         * Init. Load up movies using movies factory
         */
        $scope.init = function() {
            MoviesFactory.getAllMovies().then(function(data) {
                $scope.items = data;
                $scope.updateMovieItems();
            });
        };

        /**
         * Search movie by title
         */
        $scope.searchMovieTitle = function() {
            MoviesFactory.getMoviesByTitle($scope.titleQuery).then(function(data) {
                $scope.items = data;
                $scope.updateMovieItems();
            });
        };

        /**
         * Update filtered movie items
         */
        $scope.updateMovieItems = function() {
            if (!$scope.items) {
                return;
            };

            var begin = (($scope.currentPage - 1) * $scope.numPerPage),
                end = begin + $scope.numPerPage;

            $scope.filteredMovieItems = $scope.items.slice(begin, end);
            $scope.itemsBegin = begin;
            $scope.itemsEnd = begin + $scope.filteredMovieItems.length;
            $scope.itemsTotal = $scope.numPerPage * scope.numPages + $scope.filteredMovieItems.length;
        };

        // Init
        $scope.init();
    
    }
]);