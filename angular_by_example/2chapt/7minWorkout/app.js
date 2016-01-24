// root module
angular.module('app', ['ngRoute','7minWorkout'])
.config(function($routeProvider) {
  $routeProvider.when('/start', {
    templateURL: 'partials/start.html'
  });

  $routeProvider.when('/workout', {
    templateURL: 'partials/workout.html',
    controller: 'WorkoutController'
  });

  $routeProvider.when('/finish', {
    templateURL: 'partials/finish.html'
  });

  $routeProvider.otherwise({
    redirectTo: '/start'
  });

})
// feature based module
angular.module('7minWorkout', []);


// testing test
