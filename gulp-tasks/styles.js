"use strict"

module.exports = function (gulp, plugins) {
    return function () {
        return gulp.src('./src/sass/style.scss')
            .pipe(plugins.sourcemaps.init())
                .pipe(plugins.sass().on('error', plugins.sass.logError))
                .pipe(plugins.cleanCss())
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest('./release/css'));
    };
};