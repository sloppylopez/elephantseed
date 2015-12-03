# Slush Jspm-react-seed [![Build Status](https://secure.travis-ci.org/sloppylopez/slush-jspm-react-seed.png?branch=master)](https://travis-ci.org/sloppylopez/slush-jspm-react-seed) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-jspm-react-seed.png)](http://badges.enytc.com/for/npm/slush-jspm-react-seed)

[![Travis](https://travis-ci.org/sloppylopez/angulpar.svg)](https://travis-ci.org/sloppylopez/angulpar)
[![built without gulp](https://img.shields.io/badge/build%20without-gulp-brightgreen.svg)](http://jspm.com)
[![oficial site](https://img.shields.io/badge/sloppy-lopez-pink.svg)](http://sloppylopez.com)

![React Logo](https://facebook.github.io/react/favicon.ico) + ![Jspm Logo](http://andrewhfarmer.com/img/2015-11-12-package-managers/jspm.png) +

>
 
# Welcome to the FUTURE

## Goodies Out-of the box
        NEW! Added React-bootstrap (ausence of css feel)
        
        Jspm as universal multi-purpose Javascript package manager

        Babel as transpiler

        React as templating system

        Nodejs modules

        ES6 & ES7 Syntactic Sugar ready out-of-the-box

        Minimum possible configuration, maximum features, judge by yourself

        Bundling (JSPM native)

        Minifying (JSPM native)

        Transpiling on runtime(browser side)
        with NODE_ENV=development (BABEL native)

        Transpiling on build time(serve side)
        with NODE_ENV=production (BABEL native)

        Static Node server run in local (JSPM native)

        Static Node server run with production like build in local (JSPM native)

        No Grunt/Gulp/Broccoli/Cake/Whatever... needed (at the time of writing, 
        let's see if we can build the whole seed without them (challenge accepted)

## Getting Started

Install `slush-jspm-react-seed` globally:

```bash
$ npm install -g slush-jspm-react-seed
```

### Usage

Create a new folder for your project:

```bash
$ mkdir my-slush-jspm-react-seed
```

Run the generator from within the new folder and download deps after:

```bash
$ cd my-slush-jspm-react-seed && slush jspm-react-seed
$ jspm i
```

## Npm commands

Run Node server for locale environment:

```bash
$ npm start
```

Run Node server for prod environment (runs Babel transpiler and bundles all js and dependencies in 1 file):

```bash
$ npm start:build
```

### Bundling and Transpiling

Transpile & bundle JS dependencies to bundle.js and generate a sourcemap:

```bash
$ npm run bundle
```

Transpile & bundle & minify JS dependencies to bundle.js and generate a sourcemap:

```bash
$ npm run minify
```

Removes the changes made by jspm to config.js while bundling:

```bash
$ npm run unbundle
```

## Common Pitfalls

Don't forget install jspm dependencies after installing using:
```bash
$ jspm i
```

If your connection is terribly slow then:
```bash
$ jspm i
```
May have hiccups while doing dns look ups, just repeat few times until he manages to download all dependencies

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/sloppylopez/slush-jspm-react-seed/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/sloppylopez/slush-jspm-react-seed/issues).

## License 

The MIT License

Copyright (c) 2015, Sergio Lopez

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

