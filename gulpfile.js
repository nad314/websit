/*jslint node: true*/
/*jslint nomen: true*/
'use strict';

var nodemon = require('gulp-nodemon');
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');

gulp.task('default', ['css'], function () {
	console.log('gulp::default');
});

gulp.task('run', ['default'], function () {
	console.log('gulp::run');
	return nodemon({
		script : './server.js',
		ext    : 'js',
		watch  : 'api'
	});
});

gulp.task('css', function () {
    gulp.src('./app/style/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('main.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./public/css'));
});
