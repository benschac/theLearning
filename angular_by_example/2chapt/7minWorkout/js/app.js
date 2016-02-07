// root module
'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', ['ngRoute','7minWorkout'])
.config(['$routeProvider', '$sceDelegateProvider', function($routeProvider, $sceDelegateProvider) {
  // $locationProvider.html5Mode(true);

  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://*.youtube.com/**'
  ]);

  $routeProvider.when('/start', { templateUrl: 'partials/start.html' });
  $routeProvider.when('/workout', { templateUrl: 'partials/workout.html', controller: 'WorkoutController' });
  $routeProvider.when('/finish', { templateUrl: 'partials/finish.html' });
  $routeProvider.otherwise({ redirectTo: '/start'});
}]);
// feature based module
angular.module('7minWorkout', []);
