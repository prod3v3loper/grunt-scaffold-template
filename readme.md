# Grunt JS Project Scaffolding

![Languages](https://img.shields.io/github/languages/top/prod3v3loper/grunt-scaffold-template.svg?style=flat "Languages")
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/16f058b250e64060bcf9014dc72d9b7c)](https://www.codacy.com/app/prod3v3loper/grunt-scaffold-template?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=prod3v3loper/grunt-scaffold-template&amp;utm_campaign=Badge_Grade)
![Code size](https://img.shields.io/github/languages/code-size/prod3v3loper/grunt-scaffold-template.svg?style=flat "Code size")
![Repo size](https://img.shields.io/github/repo-size/prod3v3loper/grunt-scaffold-template.svg?style=flat "Repo size")
![License](https://img.shields.io/github/license/prod3v3loper/grunt-scaffold-template.svg?style=flat "License")
[![alt text](https://img.shields.io/website-up-down-green-red/https/www.tnado.com/open-source-projects-by-prod3v3loper.svg?style=flat "Website")](https://www.tnado.com/open-source-projects-by-prod3v3loper/ "Website")

Most use grunt and then Yeoman as an example to create a scaffolding, but you can do that only with Grunt himself.

This repo here is a prepared template, you can either clone it in a folder of your choice or clone it in ./grunt-init/template to access it with Grunt.

# Install to run templates

First we need grunt and `grunt-init` globally available.

```
npm install -g grunt-init
```

So switch to your path you have created for your project.

```
cd /path/to/project/
```

# Get Template

If we have this, almost everything is done, we just have to clone the templates here, so download so we can use them. You can do one of the two.

`~/.grunt-init/`
```
git clone https://github.com/prod3v3loper/grunt-scaffold-template.git ~/.grunt-init/grunt-scaffold-template
```
`/path/what/you/want/`
```
git clone https://github.com/prod3v3loper/grunt-scaffold-template.git /path/what/you/want/grunt-scaffold-template
```

# Use Template

Now we can add our template to our project by executing the following command.

`~/.grunt-init/`
```
grunt-init ~/.grunt-init/grunt-scaffold-template
```
`/path/what/you/want/`
```
grunt-init /path/what/you/want/grunt-scaffold-template
```

When we start then we get asked with which we can still adjust our project. If all questions are answered they will be considered and the files will be created.

```
prod3v3loper:netbeans tarim$ cd /Users/username/Sites/netbeans/PHP-Gruntjs
prod3v3loper:PHP-Gruntjs tarim$ grunt-init /Users/username/Sites/external/grunt-scaffold-template/
Running "init:/Users/username/Sites/external/grunt-scaffold-template/" (init) task
This task will create one or more files in the current directory, based on the
environment and the answers to a few questions. Note that answering "?" to any
question will show question-specific help and answering "none" to most questions
will leave its value blank.

"grunt-scaffold-template" template notes:
This is a Scaffolding and we create in next steps our files.The Gruntfile.js
will be automatically integrated here, then a package.json if you wantand create
a HTML, CSS (SASS or LESS) and a JavaScript file, if you want.

Please answer the following:
[?] Will you handle LESS files? (Y/n)
[?] Will you handle SASS files? (Y/n) n
[?] Will you autoprefix css files? (Y/n)
[?] Will you minifiy JavaScript files? (Y/n)
[?] Do you need to make any changes to the above before continuing? (y/N)

Writing Gruntfile.js...OK
Writing public/index.html...OK
Writing src/js/index.js...OK
Writing package.json...OK

Initialized from template "grunt-scaffold-template".

Done, without errors.
```

So when we got our template we can now run `npm install` to install our dependencies. That's it, now we can use Grunt. Also run.

```
npm install
```
# Run Gruntfile.js commands now

Now fire one of our task in your console.
```
grunt build:release
```
or
```
grunt build:dev
```

## Contribute

Please an [issue](https://github.com/prod3v3loper/Grunt-Scaffold-Template/issues) if you
think something could be improved. Please submit Pull Requests when ever
possible.

## Built with

* [VSC](https://code.visualstudio.com) -  Visual Code Studio

## Authors

* **Samet Tarim** - *All works* - [prod3v3loper](https://www.tnado.com/author/prod3v3loper/)

# License

[MIT](https://github.com/prod3v3loper/grunt-scaffold-template/blob/master/LICENSE)
