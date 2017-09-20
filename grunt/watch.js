"use strict"

//watch settings
module.exports = {
    scripts: {
        files: ['src/**/*.js','src/**/*.scss','src/**/*.html'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
    },
}