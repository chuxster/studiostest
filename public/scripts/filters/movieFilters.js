'use strict';

var app = angular.module('studiostest');

app.filter('secondsToRunTime', ['$filter', function($filter) {
    return function(seconds) {
        return $filter('date')(new Date(0, 0, 0).setSeconds(seconds), "H 'hour' m 'minutes'");
    };
}]);