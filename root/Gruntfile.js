/**
 * GRUNT
 *
 * @author  Samet Tarim aka prod3v3loper
 * @see https://gruntjs.com/getting-started
 */
module.exports = function( grunt ) {

    // Project configuration.
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),{% if ( less ) { %}
        less: {
            dev: {
                files: {
                    './public/style.min.css': [
                        './src/less/style.less',
                        //.. add here more files
                    ]
                }
            },
            build: {
                options: {
                    compress: true,
                    sourceMap: true,
                },
                files: {
                    './dist/style.min.css': [
                        './src/less/style.less',
                        //.. add here more files
                    ]
                }
            }
        },{% } %} {% if ( sass ) { %}
        sass: {
            dev: {
                files: {
                    './public/style.min.css': [
                        './src/sass/style.scss',
                        //.. add here more files
                    ]
                }
            },
            build: {
                options: {
                    style: "compressed",
                    sourcemap: "auto",
                },
                files: {
                    './dist/style.min.css': [
                        './src/sass/style.scss',
                        //.. add here more files
                    ]
                }
            }
        },{% } %} {% if ( uglify ) { %}
        uglify: {
            dev: {
                files: {
                    './public/index.min.js': [
                        './src/js/index.js',
                        //.. add here more files
                    ]
                }
            },
            build: {
                options: {
                    compress: true,
                    sourceMap: true,
                    output: {
                        comments: false
                    }
                },
                files: {
                    './dist/index.min.js': [
                        './src/js/index.js',
                        //.. add here more files
                    ]
                }
            }
        },{% } %} {% if ( autoprefixer ) { %}
        autoprefixer: {
            dev: {
                files: {
                    './public/style.min.css': 'public/style.min.css'
                }
            },
            build: {
                files: {
                    './dist/style.min.css': 'dist/style.min.css'
                }
            }
        },{% } %}
        watch: { {% if ( uglify ) { %}
            js: {
                files: ['<%= uglify.files %>'],
                tasks: ['uglify']
            },{% } %} {% if ( less ) { %}
            less: {
                files: ['<%= less.files %>'],
                tasks: ['less']
            },{% } %} {% if ( sass ) { %}
            sass: {
                files: ['<%= sass.files %>'],
                tasks: ['sass']
            },{% } %} {% if ( autoprefixer ) { %}
            css: {
                files: ['<%= autoprefixer.files %>'],
                tasks: ['autoprefixer']
            }{% } %}
        },
    } );

    // @see https://gruntjs.com/api/grunt.task#grunt.task.loadnpmtasks
    {% if ( less ) { %}grunt.loadNpmTasks( 'grunt-contrib-less' );{% } %}
    {% if ( sass ) { %}grunt.loadNpmTasks( 'grunt-contrib-sass' );{% } %}
    {% if ( uglify ) { %}grunt.loadNpmTasks( 'grunt-contrib-uglify' );{% } %}
    {% if ( autoprefixer ) { %}grunt.loadNpmTasks( 'grunt-autoprefixer' );{% } %}

    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    // @see https://gruntjs.com/api/grunt.task#grunt.task.registertask
    grunt.task.registerTask( 'build:release', 'Build release files for production.', function() {
        // Run all tasks on build
        grunt.task.run([
            {% if ( uglify ) { %}'uglify:build',{% } %}
            {% if ( less ) { %}'less:build',{% } %}
            {% if ( sass ) { %} 'sass:build', {% } %}
            {% if ( autoprefixer ) { %}'autoprefixer:build'{% } %}
        ]);
        // Copy public folder
        grunt.file.copy('./public', './dist');
    } );

    // @see https://gruntjs.com/api/grunt.task#grunt.task.registertask
    grunt.task.registerTask( 'build:dev', 'Build dev files for development.', function() {
        // Run all tasks on build
        grunt.task.run([
            {% if ( uglify ) { %}'uglify:dev',{% } %}
            {% if ( less ) { %}'less:dev',{% } %}
            {% if ( sass ) { %}'sass:dev', {% } %}
            {% if ( autoprefixer ) { %}'autoprefixer:dev'{% } %}
        ]);
    } );

    grunt.registerTask( 'watch', [ 'watch' ] );
};
