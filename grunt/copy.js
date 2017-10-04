"use strict"

module.exports = {
    //copy module settings
    main:{
        files:[
            //copy html files
            {expand: true, cwd:'src/', src: ['*.html'], dest: 'release/', filter: 'isFile'},

            //copy js files
            {expand: true, cwd:'src/js', src: ['*.js'], dest: 'release/js', filter: 'isFile'},

            //copy images
            {expand: true, cwd:'src/img', src: ['*.png'], dest: 'release/img', filter: 'isFile'}
        ]
    }
}