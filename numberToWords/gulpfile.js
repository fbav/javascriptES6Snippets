'use strict';
let jshint = require('gulp-jshint'),
	gulp = require('gulp'),
	mocha = require('gulp-mocha'),
	babel = require('gulp-babel');

require('babel-register');

let jsSrc = 'src/**/*.js',
	testSrc = 'test/**/*.js';

gulp.task('lint', function () {
	return gulp.src(jsSrc)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('test', () => {
	return gulp.src(testSrc, {
			read: false
		})
		.pipe(mocha({
			reporter: 'nyan',
			compilers: [
            'js:babel-core/register',
        ]
		}));
});

gulp.task('build', function () {
	return gulp.src(jsSrc)
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'test', 'build']);