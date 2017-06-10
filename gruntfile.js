module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            angular: {
                expand: true,
                src: [
                    './node_modules/angular/angular.min.js', 
                    './node_modules/angular/angular.min.js.map', 
                    './node_modules/angular-route/angular-route.min.js.map',
                    './node_modules/angular-route/angular-route.min.js.map'
                ],
                dest: './client/js/',
                flatten: true,
                filter: 'isFile'
            }, 
            jquery: {
                expand: true,
                src: [
                    './node_modules/jquery/dist/jquery.min.js'
                ],
                dest: './client/js/',
                flatten: true,
                filter: 'isFile'
            }
        },
        imagemin: {
            site: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['*.{png,jpg,svg}'],
                    dest: 'client/img/'
                }]
            },
            gallery: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'src/img/gallery',
                    src: ['**/*.jpg'],
                    dest: 'client/img/gallery/'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    './css/rne-style.css': './src/scss/index.scss'
                }
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                mangle: false
            },
            my_target: {
                files: {
                    'client/js/rne-site.min.js': ['src/rne-app/**/*.js']
                }
            }
        },
        watch: {
            images: {
                files: ['src/img/**/*'],
                tasks: ['imagemin'],
                options: { livereload: true }
            },
            js: {
                files: ['./src/rne-app/**/*.js'],
                tasks: ['uglify'],
                options: { livereload: true }
            },
            scss: {
                files: [],
                tasks: [],
                options: { livereload: true }
            },
            css: {
                files: ['./client/css/overeasy.min.css'],
                options: { livereload: true }
            },
            html: {
                files: [
                    './client/index.html',
                    './client/views/**/*.html'
                ],
                options: { livereload: true }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('install', ['uglify', 'copy', 'imagemin']);
    grunt.registerTask('default', ['watch']);

};