/*
Required Features:
1. Start workout
2. Show workout in progress and show a progress indicator.
3. After time is up, show next excerise.
4. Repeat until all excerises are done.
*/

// get module created in app.js
angular.module('7minWorkout')
// register the workout controller.
// $injection annotation:
// WorkoutController['$inject']  =  ['$scope'];
// inline dependancy injection to resolve.
.controller('WorkoutController',['$scope', function($scope) {
  // add models: WorkoutPlan and Exercise
  function Exercise(args) {
    // Showing relivent excerise information/data
    this.name = args.name;
    this.title = args.title;
    this.description = args.description;
    this.image = args.image;
    this.related = {};
    this.related.videos = args.videos;
    this.nameSound = args.nameSound;
    this.procedure = args.procedure;
  }

function WorkoutPlan(args) {
  // list of exercises in the workout, name of workout, title, rest cycle.
  this.exercise = [];
  this.name = args.name;
  this.title = args.title;
  this.restBetweenExercise = args.restBetweenExercise;
}

var restExercise;
var workoutPlan;



// declare init function.
var init = function() {
  startWorkout();
}
// invoke immidately.
init();

}]);
