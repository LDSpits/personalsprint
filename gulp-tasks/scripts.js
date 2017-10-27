"use strict"

module.exports = function (gulp, plugins) {
    return function () {
        return gulp.src('./src/js/**/*.js')
            .pipe(plugins.sourcemaps.init())
                .pipe(plugins.babel({
                    presets: ['env']
                }))
                .pipe(plugins.uglify())
            .pipe(plugins.sourcemaps.mapSources(function(sourcePath, file) {
                // source paths need to point to the files in the src folder' 
                return '../../src/js/' + sourcePath;
            }))
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(gulp.dest('./release/js'))
    };
};