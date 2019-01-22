/**
 * GRUNT
 *
 * @author  Samet Tarim aka prod3v3loper
 * @see https://gruntjs.com/getting-started
 */
module.exports = function( grunt ) {

    // Project configuration.
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),
        less: {
            dev: {
                files: {
                    'src/css/style.min.css': [
                        'src/less/style.less',
                        //.. add here more files
                    ]
                }
            },
            build: {
                files: {
                    'dist/style.min.css': [
                        'src/less/style.less',
                        //.. add here more files
                    ]
                }
            }
        },
        sass: {
            dev: {
                files: {
                    'src/css/style.min.css': [
                        'src/sass/style.scss',
                        //.. add here more files
                    ]
                }
            },
            build: {
                files: {
                    'dist/style.min.css': [
                        'src/sass/style.scss',
                        //.. add here more files
                    ]
                }
            }
        },
        uglify: {
            dev: {
                files: {
                    'public/js/min/index.min.js': [
                        'src/js/index.js',
                        //.. add here more files
                    ]
                }
            },
            build: {
                files: {
                    'dist/index.min.js': [
                        'src/js/index.js',
                        //.. add here more files
                    ]
                }
            }
        },
        autoprefixer: {
            dev: {
                files: {
                    'src/style.min.css': 'src/style.min.css'
                }
            },
            build: {
                files: {
                    'dist/style.min.css': 'dist/style.min.css'
                }
            }
        },
        watch: {
            js: {
                files: [ '<%= uglify.files %>' ],
                tasks: [ 'uglify' ]
            },
            less: {
                files: [ '<%= less.files %>' ],
                tasks: [ 'less' ]
            },
            css: {
                files: [ '<%= autoprefixer.files %>' ],
                tasks: [ 'autoprefixer' ]
            }
        },
    } );

    // @see https://gruntjs.com/api/grunt.task#grunt.task.loadnpmtasks
    {% if ( less ) { %}grunt.loadNpmTasks( 'grunt-contrib-less' );{% } %}
    {% if ( sass ) { %}grunt.loadNpmTasks( 'grunt-contrib-sass' );{% } %}
    {% if ( uglify ) { %}grunt.loadNpmTasks( 'grunt-contrib-uglify' );{% } %}
    {% if ( autoprefixer ) { %}grunt.loadNpmTasks( 'grunt-autoprefixer' );{% } %}
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    // @see https://gruntjs.com/api/grunt.task#grunt.task.registertask
    grunt.task.registerTask( 'build', 'Build dist folder with all inside.', function() {
        // Run all tasks on build
        grunt.task.run([
            {% if ( uglify ) { %}'uglify:build',{% } %}
            {% if ( less ) { %}'less:build',{% } %}
            {% if ( sass ) { %} 'sass:build', {% } %}
            {% if ( autoprefixer ) { %}'autoprefixer:build'{% } %}
        ]);
        // Copy public folder
        grunt.file.copy('public', 'dist');
    } );

    // @see https://gruntjs.com/api/grunt.task#grunt.task.registertask
    grunt.task.registerTask( 'dev', 'Build dev files.', function() {
        // Run all tasks on build
        grunt.task.run([
            {% if ( uglify ) { %}'uglify:dev',{% } %}
            {% if ( less ) { %}'less:dev',{% } %}
            {% if ( sass ) { %} 'sass:dev', {% } %}
            {% if ( autoprefixer ) { %}'autoprefixer:dev'{% } %}
        ]);
    } );

    grunt.registerTask( 'watch', [ 'watch' ] );
};
