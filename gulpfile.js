var gulp = require('gulp'),
	csso = require('gulp-csso'),
	autoprefixer = require('gulp-autoprefixer'),
	myth = require('gulp-myth'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	less = require('gulp-less'),
	uncss = require('gulp-uncss');

gulp.task('js', function() {
	return gulp.src('./script/*.js')
		.on('error', console.log)
		.pipe(concat('slider3d.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/'));
});

gulp.task('less', function() {
	return gulp.src('./less/*.less')
		.on('error', console.log)
		.pipe(concat('slider3d.less'))
		.pipe(less())
		.pipe(myth())
		.pipe(csso())
		.pipe(autoprefixer({browsers: ['last 2 versions']}))
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
	gulp.watch('./script/*.js', ['js']);
	return gulp.watch('./less/*.less', ['less']);
});

gulp.task('default', ['js', 'less', 'watch']);
