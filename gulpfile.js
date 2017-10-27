'use strict';

let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();

function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins);
}

gulp.task('scripts', getTask('scripts'));
gulp.task('styles', getTask('styles'));

gulp.task('watch', function(){
    gulp.watch('./src/**/*.js', ['scripts']); 
    gulp.watch('./src/**/*.scss', ['styles']); 
})