'use strict';
require('dotenv').load();
var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');
var configureSetup  = {
	createModule: false,
	constants: {
		CLIENT_ID: process.env.CLIENT_ID,
		CLIENT_SECRET: process.env.CLIENT_SECRET
	}
};

gulp.task('config', function() {
	gulp.src('config.json')
	.pipe(gulpNgConfig('MyPlace', configureSetup))
	.pipe(gulp.dest('public'));
});