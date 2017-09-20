"use strict"

module.exports = {
    //sass settings
    options: {
        sourceMap: true
    },
    dist: {
        files: {
            'release/css/style.css': 'src/sass/style.scss'
        }
    }
}