"use strict"

//cssmin settings
module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: 'release/css/',
            src: ['*.css', '!*.min.css'],
            dest: 'release/css/',
            ext: '.min.css'
        }]
    }
}