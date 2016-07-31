'use strict';

var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	sass = require('gulp-sass'),
	useref = require('gulp-useref'),
	gulpIf = require('gulp-if'),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano'),
	// imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'), 
	del = require('del'),
	runSequence = require('run-sequence'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
	return gulp.src('app/styles/scss/**/*.scss')
	.pipe(sass())
	.pipe( autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('app/styles/css'))
	.pipe(browserSync.reload({stream: true
	}));

});

// gulp.task('images', function() {
// 	return gulp.src('app/images/**/*.+(png|jpg|svg|)')
// 	.pipe(cache(imagemin({
// 		interlaced: true
// 	})))
// 	.pipe(gulp.dest('dist/images'))
// });

gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))
});

gulp.task('watch', ['serve'], function() {
	// run sass task first.
	gulp.watch('app/styles/scss/**/*.scss', ['sass']);
	// check changes to html and js files.
	gulp.watch(['app/*.html', 'app/js/**/*.js'], browserSync.reload);
})

gulp.task('build', function(cb) {
	runSequence('clean:dist',
['sass', 'useref', 'fonts'], cb)
	console.log('Building Production Files')
})

gulp.task('useref', function() {
	return gulp.src('app/*.html')
	.pipe(useref())
	// If file is a js file, uglify
	.pipe(gulpIf('*.js', uglify()))
	.pipe(gulpIf('*.css', cssnano()))
	.pipe(gulp.dest('dist'))
});

gulp.task('clean:dist', function() {
	return del.sync('dist');
})

gulp.task('cache:clear', function(cb) {
	return cache.clearAll(cb);
})

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('default', function(cb) {
	runSequence(['sass', 'serve', 'watch']);
})

