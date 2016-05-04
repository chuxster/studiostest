var app = angular.module('studiostest');

app.factory('MoviesFactory',
    function($http, $q) {
        var CONST = {
            ITEMS_URL : '/items'
        };

        /**
         * Get all movie items
         * @return {Promise}
         */
        var getAllMovies = function() {
        	return getMovies();
        };
        
        /**
         * Get movie items by matching title
         * @param title string
         * @return {Promise}
         */
        var getMoviesByTitle = function(title) {
        	var config = {};
        	
        	if (title) {
            	// Query param with title_like
        	    config = {
                    params : {
                        title_like : title
                    }
                };
            }
        	
        	return getMovies(config);
        }

        /**
         * Get movie by slug id
         * @param slugId string
         * @returns {Promise}
         */
        var getMovieBySlug = function(slugId) {
        	var config = {};
        	
        	if (slugId) {
                // Query param with slug
        		config = {
                    params : {
                        slug : slugId
                    }
                };
        	}

        	return getMovies(config);
        };

        /**
         * Get movie from DB
         * @param config Object
         * @return {Promise}
         */
        var getMovies = function(config) {
            var deferred = $q.defer(),
                config = angular.extend({}, {}, config);
            
    	    $http.get(CONST.ITEMS_URL, config).then(function(response) {
                // successful
                deferred.resolve(response.data);
            }, function(response) {
                deferred.reject(response.data);
            });
    	    
    	    return deferred.promise;
        };

        return {
            'getAllMovies' : getAllMovies,
            'getMoviesByTitle' : getMoviesByTitle,
            'getMovieBySlug' : getMovieBySlug
        }

    }
);