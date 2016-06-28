/*
 * slush-jspm-react-seed
 * https://github.com/sloppylopez/slush-jspm-react-seed
 *
 * Copyright (c) 2016, Sergio Lopez
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer'),
    path = require('path'),
    shell = require('gulp-shell'),
    spawn = require('child_process').spawn,
    gutil = require('gulp-util');

function format(string) {
    var username = string.toLowerCase();
    return username.replace(/\s/g, '');
}

var defaults = (function () {
    var workingDirName = path.basename(process.cwd()),
        homeDir, osUserName, configFile, user;

    if (process.platform === 'win32') {
        homeDir = process.env.USERPROFILE;
        osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase();
    }
    else {
        homeDir = process.env.HOME || process.env.HOMEPATH;
        osUserName = homeDir && homeDir.split('/').pop() || 'root';
    }

    configFile = path.join(homeDir, '.gitconfig');
    user = {};

    if (require('fs').existsSync(configFile)) {
        user = require('iniparser').parseSync(configFile).user;
    }

    return {
        appName: workingDirName,
        userName: osUserName || format(user.name || ''),
        authorName: user.name || '',
        authorEmail: user.email || ''
    };
})();

gulp.task('default', function (done) {

    var prompts = [{
        name: 'appName',
        message: 'What is the name of your project?',
        default: defaults.appName
    }, {
        name: 'appDescription',
        message: 'What is the description?'
    }, {
        name: 'appVersion',
        message: 'What is the version of your project?',
        default: '0.1.0'
    }, {
        name: 'authorName',
        message: 'What is the author name?',
        default: defaults.authorName
    }, {
        name: 'authorEmail',
        message: 'What is the author email?',
        default: defaults.authorEmail
    }, {
        name: 'userName',
        message: 'What is the github username?',
        default: defaults.userName
    }, {
        type: 'confirm',
        name: 'moveon',
        message: 'Continue?'
    }];

    //Ask
    inquirer.prompt(prompts).then(function (answers) {
        if (!answers.moveon) {
            return done();
        }
        answers.appNameSlug = _.slugify(answers.appName);
        gulp.src([__dirname + '/templates/**', '!' + __dirname + '/templates/assets/**'])
            .pipe(template(answers))
            .pipe(rename(function (file) {
                if (file.basename[0] === '_' && file.extname !== '.scss') {
                    file.basename = '.' + file.basename.slice(1);
                }
            }))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./'))
            .pipe(install())
            .on('finish', function () {
                //TODO fixme, there is a problem executing jspm the 'gulp way' so we are doing it like this not to get stuck and keep it simple
                var child = spawn('jspm', ['config', 'registries.npm.timeouts.lookup' ,'240'], {cwd: process.cwd()});
                child.stdout.setEncoding('utf8');
                child.stdout.on('data', function(data){
                    gutil.log(data.substring(0, data.length-1));
                });
                child.stderr.setEncoding('utf8');
                child.stderr.on('data', function(data){
                    gutil.log(gutil.colors.red(data));
                });
                // Run jspm install since install package doesn't run it
                var childInstall = spawn('jspm', ['install'], {cwd: process.cwd()});
                childInstall.stdout.setEncoding('utf8');
                childInstall.stdout.on('data', function(data){
                    gutil.log(data.substring(0, data.length-1));
                });
                childInstall.stderr.setEncoding('utf8');
                childInstall.stderr.on('data', function(data){
                    gutil.log(gutil.colors.red(data));
                });
            });
    });
});
