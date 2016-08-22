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


function swallow(error) {
    console.log(error.toString());
    swallow.emit('end');
}

gulp.task('css', function () {
    gulp.src('./app/style/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .on('error', swallow)
        .pipe(concat('main.css'))
        .on('error', swallow)
        .pipe(cssmin())
        .on('error', swallow)
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', ['default'], function () {
    gulp.watch('./app/style/*.scss', ['css']);
});

