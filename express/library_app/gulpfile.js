const gulp = require('gulp');
const jshint = require('gulp-jshint');

const jsconfig = ['*.js', 'src/**/*.js'];

gulp.task('style', () => {
  gulp.src(jsconfig)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish', {
        verbose: true
      }));
});


gulp.task('default', () => {
  console.log('testing');
});
