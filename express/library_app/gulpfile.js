const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const nodemon = require('gulp-nodemon');

const jsconfig = ['*.js', 'src/**/*.js'];

gulp.task('style', () => {
  return gulp.src(jsconfig)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish', {
        verbose: true
      }))
      .pipe(jscs());
});

gulp.task('serve',['style', 'inject'], () => {
  let options = {
    script: 'app.js',
    delayTime: 1,
    env: {
      'PORT': 5000
    },
    watch: jsconfig
  };

  return nodemon(options)
         .on('restart', () => {
           console.log('Restarting....');
         });
});

gulp.task('inject', () => {
  let wiredep = require('wiredep').stream;
  let options = {
    bowerJson: require('./bower.json'),
    directory: './public/lib',
    ignorePath: '../../public'
  };

  return gulp.src('./src/views/*.html')
             .pipe(wiredep(options))
             .pipe(gulp.dest('./src/views/'));

});

gulp.task('default', () => {
  console.log('testing');
});
