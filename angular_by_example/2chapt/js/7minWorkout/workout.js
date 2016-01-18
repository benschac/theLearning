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

var createWorkout = function() {
  // instanciate new Workout Object.
  var workout = new WorkoutPlan({
    name: "7minWorkout",
    title: "7 Minute Workout",
    restBetweenExercise: 10
  });

  // push an exercise object into workout's exercise array.
  // this could come from a third party API or persistent data resource.
  // this is just adding "content".
  workout.exercise.push({
    details: new Exercise({
      name: "jumping jacks",
      title: "Jumping Jacks",
      description: "Jumping Jacks.",
      image: "img/JumpingJacks.png",
      videos: [],
      variations: [],
      procedure: "";
    }),

    duration: 30
  });

  workout.exercises.push({
    exercise: new Exercise({
        name: "wallSit",
        title: "Wall Sit",
        description: "Wall Sit.",
        image: "img/wallsit.png",
        videos: [],
        variations: [],

    }),
    duration: 30
  });
  workout.exercises.push({
      exercise: new Exercise({
          name: "pushUp",
          title: "Push Up",
          description: "Discription about pushup.",
          image: "img/pushup.png",
          videos: ["https://www.youtube.com/watch?v=Eh00_rniF8E", "https://www.youtube.com/watch?v=ZWdBqFLNljc", "https://www.youtube.com/watch?v=UwRLWMcOdwI", "https://www.youtube.com/watch?v=ynPwl6qyUNM", "https://www.youtube.com/watch?v=OicNTT2xzMI"],
          variations: ["Planche push-ups", "Knuckle push-ups", "Maltese push-ups", "One arm versions"],
          procedure: ""
      }),
      duration: 30
  });
  workout.exercises.push({
      exercise: new Exercise({
          name: "crunches",
          title: "Abdominal Crunches",
          description: "Abdominal Crunches.",
          image: "img/crunches.png",
          videos: [],
          variations: [],
          procedure: ""
      }),
      duration: 30
  });
  workout.exercises.push({
      exercise: new Exercise({
          name: "stepUpOntoChair",
          title: "Step Up Onto Chair",
          description: "Step Up Onto Chair.",
          image: "img/stepUpOntoChair.jpeg",
          videos: [],
          variations: [],
          procedure: ""
      }),
      duration: 30
  });
  workout.exercises.push({
      exercise: new Exercise({
          name: "squat",
          title: "Squat",
          description: "Squat.",
          image: "img/squat.png",
          videos: [],
          variations: [],
          procedure: ""
      }),
      duration: 30
  });
  workout.exercises.push({
      exercise: new Exercise({
          name: "tricepdips",
          title: "Tricep Dips On Chair",
          description: "Tricep Dips On Chair.",
          image: "img/tricepdips.jpg",
          videos: [],
          variations: [],
          procedure: ""
      }),
      duration: 30
  });
  workout.exercises.push({
      exercise: new Exercise({
          name: "plank",
          title: "Plank",
          description: "Plank.",
          image: "img/plank.png",
          videos: [],
          variations: [],
          procedure: ""
      }),
      duration: 30
  });
  workout.exercises.push({
      exercise: new Exercise({
          name: "highKnees",
          title: "High Knees",
          description: "High Knees.",
          image: "img/highknees.png",
          videos: [],
          variations: [],
          procedure: ""
      }),
      duration: 30
  });
  workout.exercises.push({
      exercise: new Exercise({
          name: "lunges",
          title: "Lunges",
          description: "Lunges.",
          image: "img/lunges.png",
          videos: [],
          variations: [],
          procedure: ""
      }),
      duration: 30
  });
  workout.exercises.push({
      exercise: new Exercise({
          name: "pushupNRotate",
          title: "Pushup And Rotate",
          description: "Pushup And Rotate.",
          image: "img/pushupNRotate.jpg",
          videos: [],
          variations: [],
          procedure: ""
      }),
      duration: 30
  });
  workout.exercises.push({
      exercise: new Exercise({
          name: "sidePlank",
          title: "Side Plank",
          description: "Side Plank.",
          image: "img/sideplank.png",
          videos: [],
          variations: [],
          procedure: ""
      }),
      duration: 30
  });
}


var startWorkout = function() {
  // define workoutPlan and create overall plan.
  var workoutPlan = createWorkout();

  // define restExercise
  restExercise = {
    // use model constructor function.
    details: new Exercise({
      name: "rest",
      title: "Relax!",
      description: "Take a break!",
      image: "img/rest.png"
    }),
    duration: workoutPlan.restBetweenExercise;
  };
  // start && use / shift off the first exercise in the array.
  startExercise(workoutPlan.exercises.shift());
}

// declare init function.
var init = function() {
  startWorkout();
}
// invoke immidately.
init();

}]);
