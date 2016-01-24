# Slush Jspm-React-seed 

[![NPM version](https://badge-me.herokuapp.com/api/npm/slush-jspm-react-seed.png)](http://badges.enytc.com/for/npm/slush-jspm-react-seed)
[![built without gulp](https://img.shields.io/badge/build%20without-gulp-brightgreen.svg)](http://jspm.com)
[![oficial site](https://img.shields.io/badge/sloppy-lopez-pink.svg)](http://sloppylopez.com)
[![Codeship Status for sloppylopez/slush-jspm-react-seed](https://codeship.com/projects/64f5f2f0-7dab-0133-7e41-6a5cc34fb59d/status?branch=master)](https://codeship.com/projects/120218)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/sloppylopez/slush-jspm-react-seed/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

![Elephant Seed](https://raw.githubusercontent.com/sloppylopez/slush-jspm-react-seed/master/templates/assets/images/ElephantSeed.png)

>
 
## Vaseline driven browser side boiler-plate annihilation. Period

## Goodies working Out-of-the-box
        NEW! Firebase friendly, just login with your account and deploy
        
        Added proper home page with navigation
        
        Added 7 to 1 for managing styles https://github.com/HugoGiraudel/sass-boilerplate
        
        Codeship Ready
        
        Added React-bootstrap (ausence of css feel)
        
        Jspm for universal multi-purpose Javascript package managing

        Babel for transpiling

        React for templating

        Nodejs modules (>= 200000 modules available)

        ES6 & ES7 Syntactic Sugar ready out-of-the-box

        Minimum possible configuration, maximum features, judge by yourself

        Bundling (JSPM native)

        Minifying (JSPM native)

        Transpiling at runtime on browser side (BABEL native)

        Transpiling at build time on serve side (BABEL native)

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

Run Node server for production like environment:

```bash
$ npm run prod
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

Removes the changes made by jspm to config.js while bundling 
(you don't really need to do this, is for learning purposes only):

```bash
$ npm run unbundle
```
Increase the timeout seconds for dns look ups in Jspm:

```bash
$ npm run ti
```

## Common Pitfalls

Don't forget install jspm dependencies after installing using ```jspm i```

If your connection is terribly slow then ```jspm i``` may have hiccups while 
doing look ups, just repeat few times until he manages to download all dependencies

While using the seed with you preferred CI you may see this error:
```
     Updating registry cache...
     Looking up github:twbs/bootstrap
     Downloading github:twbs/bootstrap@3.3.1

err  Error downloading github:twbs/bootstrap

     GitHub rate limit reached. To increase the limit use GitHub authentication.
     Run jspm endpoint config github to set this up.

warn Installation changes not saved.
``` 
Fear not, here you can see how to overcome the problem, unfortunately the seed can't do that for you:
https://github.com/jspm/jspm-cli/blob/master/docs/registries.md

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
