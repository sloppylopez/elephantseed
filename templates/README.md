# Slush Jspm-React-seed 

[![oficial site](https://img.shields.io/badge/sloppy-lopez-pink.svg)](http://sloppylopez.com)
[![NPM version](https://badge-me.herokuapp.com/api/npm/slush-jspm-react-seed.png)](http://badges.enytc.com/for/npm/slush-jspm-react-seed)
[![built without gulp](https://img.shields.io/badge/build%20without-gulp-brightgreen.svg)](http://jspm.com)
[![Codeship Status for sloppylopez/slush-jspm-react-seed](https://codeship.com/projects/64f5f2f0-7dab-0133-7e41-6a5cc34fb59d/status?branch=master)](https://codeship.com/projects/120218)
![Dependencies](https://david-dm.org/sloppylopez/elephantseed.svg)


![Elephant Seed](https://raw.githubusercontent.com/sloppylopez/slush-jspm-react-seed/master/templates/assets/images/ElephantSeed.png)

https://elephantseed.firebaseapp.com

>
 
## Vaseline driven browser side boiler-plate annihilation. Period

## Goodies working Out-of-the-box
        NEW! Improved loading times in production bundle

        Added working ESlint out-of-the-box

        Codeclimate ready
        
        Added floating notifications using toastr
        
        Livereload using lite-server which is based in BrowserSync.
        
        Firebase 3.0 friendly, just login with your account and deploy
        
        Minimum possible configuration, maximum features,
        judge by yourself
        
        Use NodeJS packages (>= 300000 available)
        
        JSPM for universal multi-purpose Javascript package managing

        ES6 & ES7 Syntactic Sugar ready out-of-the-box

        Bundling & Minifying (JSPM native)
        
        NodeSASS for doing scss2css 
        
        Added 7 to 1 for managing styles 
        https://github.com/HugoGiraudel/sass-boilerplate

        No Grunt/Gulp/Broccoli/Cake/Whatever... needed at the time of writing, 
        let's see if we can build the whole seed without them (challenge accepted)

## Getting Started
Make sure you have jspm installed before proceeding `npm install -g jspm`
Install `slush-jspm-react-seed` globally:

```bash
$ npm install -g slush-jspm-react-seed
```

### Usage

* Create a new folder for your project:

```bash
$ mkdir my-slush-jspm-react-seed
```

* Run the generator from within the new folder and download deps after:

```bash
$ cd my-slush-jspm-react-seed
$ slush jspm-react-seed
$ jspm i
```

## During installation:

* If Slush installer asks you to overwrite files due to conflicts press 'a' (Overwrite All)

## After installation:Npm commands

Disable dependencies cache, unbundle and unminify js files , scss2css:

```bash
$ npm run dev
or
$ npm start
```

Enable dependencies cache, bundle and minify, scss2css:
I strongly advise you to use this command for everything,
for running the project while developing, and for making the
package just before releasing the code in production doing
`npm run prod` simply because it loads the page 4 times faster
and you can still debug and enjoy the goodies of having a
source map plus the build time it's practically the same
as using `npm run dev`.
 
```bash
$ npm run prod
```

Run ESlint
```bash
$ npm run eslint
```

Deploy in Firebase (you have to login via command line in your OWN account):

```bash
$ firebase deploy
```

## Common Pitfalls

* If your connection is slow then sometimes `jspm i` may have hiccups while 
doing look ups trying to download dependencies, just wait for it to finish and repeat `jspm i` 
few times until it manages to download all dependencies,
eventually you may try to `slush jspm-react-seed` again in a clean folder if the installer gets stuck.
You may see messages like this is that situation
```
     warn It's taking a long time to process the dependencies of npm:core-util-is@1.0.2.
          This package may need an ignore property to indicate test or example folders for jspm to skip.
```
* While using the seed with you preferred CI you may see this error:
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

* When eslint finds an error you may see an error message coming from npm, this is normal, just fix the linting
   error and you won't see it anymore


## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/sloppylopez/slush-jspm-react-seed/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/sloppylopez/slush-jspm-react-seed/issues).

## License 

The MIT License

Copyright (c) 2016, Sergio Lopez

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
