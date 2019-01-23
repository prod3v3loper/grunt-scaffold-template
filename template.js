/**
 * GRUNT SCAFFOLD
 *
 * @author  Samet Tarim aka prod3v3loper
 * @see     https://gruntjs.com/project-scaffolding
 */
'use strict';

// https://gruntjs.com/project-scaffolding#exports.description
exports.description = 'Create Grunt Scaffolding by prod3v3loper.';

// https://gruntjs.com/project-scaffolding#exports.notes
exports.notes = 'This is a Scaffolding and we create in next steps our files.' +
    'The Gruntfile.js will be automatically integrated here, then a package.json if you want' +
    'and create a HTML, CSS (SASS or LESS) and a JavaScript file, if you want.';

// https://gruntjs.com/project-scaffolding#exports.warnon
exports.warnOn = 'Gruntfile.js'; // Warn on a Gruntfile.js exists.
exports.warnOn = 'package.json'; // Warn on a package.json exists.
exports.warnOn = 'public/index.html'; // Warn on a index.html exists.
exports.warnOn = 'src/js/index.js'; // Warn on a index.js exists.

// https://gruntjs.com/project-scaffolding#exports.template
exports.template = function( grunt, init, done ) {

    // https://gruntjs.com/project-scaffolding#init.process
    init.process( {}, [ {
            name: 'less',
            message: 'Will you handle LESS files?',
            default: 'Y/n',
            warning: 'This add grunt-contrib-less in package.json.'
        },
        {
            name: 'sass',
            message: 'Will you handle SASS files?',
            default: 'Y/n',
            warning: 'This add grunt-contrib-sass in package.json.'
        },
        {
            name: 'autoprefixer',
            message: 'Will you autoprefix css files?',
            default: 'Y/n',
            warning: 'This add grunt-autoprefixer in package.json.'
        },
        {
            name: 'uglify',
            message: 'Will you minifiy JavaScript files?',
            default: 'Y/n',
            warning: 'This add grunt-contrib-uglify in package.json.'
        }
    ], function( err, props ) {

        props.less = /y/i.test( props.less );
        props.sass = /y/i.test( props.sass );
        props.uglify = /y/i.test( props.uglify );
        props.autoprefixer = /y/i.test( props.autoprefixer );

        // https://gruntjs.com/project-scaffolding#init.filestocopy
        var files = init.filesToCopy( props );
        // https://gruntjs.com/project-scaffolding#init.copyandprocess
        init.copyAndProcess( files, props );

        var devDependencies = {
            "grunt": "^1.0.3",
            "grunt-contrib-watch": "^1.1.0",
            "grunt-contrib-clean": "^2.0.0",
        };

        if ( props.less ) {
            grunt.file.mkdir( 'src/less' );
            grunt.file.write( 'src/less/style.less' );
            devDependencies[ 'grunt-contrib-less' ] = '^2.0.0';
        }

        if ( props.sass ) {
            grunt.file.mkdir( 'src/sass' );
            grunt.file.write( 'src/sass/style.scss' );
            devDependencies[ 'grunt-contrib-sass' ] = '^1.0.0';
        }

        if ( props.autoprefixer ) {
            devDependencies[ 'grunt-autoprefixer' ] = '^3.0.4';
        }

        if ( props.uglify ) {
            devDependencies[ 'grunt-contrib-uglify' ] = '^4.0.0';
        }

        var licenses = ['MIT'];
        init.addLicenseFiles({
            'LICENSE': '/LICENSE'
        }, licenses);

        // https://gruntjs.com/project-scaffolding#init.writepackagejson
        init.writePackageJSON( 'package.json', {
            name: "grunt-scaffold-template",
            description: "",
            author_name: "Samet Tarim aka prod3v3loper",
            author_email: "",
            author_url: "https://www.tnado.com/author/prod3v3loper/",
            repository: "https://github.com/prod3v3loper/Grunt-Scaffold-Template",
            version: "1.0.0",
            license: "MIT",
            bugs: "https://github.com/prod3v3loper/Grunt-Scaffold-Template/issues",
            devDependencies: devDependencies
        } );

        done();
    } );
};
