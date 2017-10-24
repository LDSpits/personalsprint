'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps')
let babel = require('gulp-babel');
let uglify = require('gulp-uglify');
let tap = require('gulp-tap');

//process and minify sass to css with sourcemaps
gulp.task('styles', function() {
    return gulp.src('./src/sass/style.scss')
    .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./release/css'));
});

//process js files with sourcemaps and vscode debug support 
gulp.task('scripts', function() {
    return gulp.src('./src/js/**/*.js')
    .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
    .pipe(sourcemaps.mapSources(function(sourcePath, file) {
        // source paths need to point to the files in the src folder' 
        return '../../src/js/' + sourcePath;
      }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./release/js'))
});

gulp.task('watch', function(){
    gulp.watch('./src/**/**.js', ['scripts']); 
    gulp.watch('./src/**/**.scss', ['styles']); 
})