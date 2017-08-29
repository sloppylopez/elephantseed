# Elephant Seed 

[![oficial site](https://img.shields.io/badge/sloppy-lopez-pink.svg)](http://sloppylopez.com)
[![built without gulp](https://img.shields.io/badge/build%20without-gulp-brightgreen.svg)](http://jspm.com)
![Dependencies](https://david-dm.org/sloppylopez/elephantseed.svg)
[![CircleCI](https://circleci.com/gh/sloppylopez/elephantseed.svg?style=svg)](https://circleci.com/gh/sloppylopez/elephantseed)

[![Elephant Seed](https://raw.githubusercontent.com/sloppylopez/slush-jspm-react-seed/master/templates/assets/images/ElephantSeed.png)](https://elephantseed.firebaseapp.com)
 
### Vaseline driven browser side boiler-plate annihilation. Period

#### Features working out-of-the-box

        NEW! Added Docker support
        
        NEW! Added live reload with Browser-Sync
        
        Improved loading times in production bundle

        Added working ESlint out-of-the-box

        Codeclimate ready
        
        Added floating notifications using toastr
        
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
        

#### Getting Started
Install `slush-jspm-react-seed` globally:

```bash
$ npm install -g slush-jspm-react-seed
```

#### Usage

* Create a new folder for your project:

```bash
$ mkdir my-elephant-seed
```

* Run the generator from within the new folder and download deps after:

```bash
$ cd my-elephant-seed
$ slush jspm-react-seed
$ npm run init
```

#### Node Commands

Dockerless NodeJS Server with unbundled dependencies 
using https via Browser-Sync 

(includes live reload, Browser-Sync will open the website for you)

```bash
$ npm run dev:node
```

Dockerless NodeJS Server with bundled dependencies using https via Browser-Sync 

(includes live reload and source maps)

```bash
$ npm run prod:node
```

#### Docker Commands

Docker Nginx + Docker NodeJS Server with HTTPS and custom domain

(Observe that is not possible to reload and focus the browser from 
inside a container, every change you made will be reflected 
but you will have to manually refresh the website)

```bash
$ npm run start:docker
$ open https://docker.nginx.node.com
```

Run arbitrary command inside the container

```bash
$ npm run exec:docker -- echo 'I am inside the container'
```

Run arbitrary command inside the container (docker natively)

```bash
$ docker-compose run --rm node-server /bin/bash -c 'echo "I am inside the container"'
```

Enter running Docker Node container

```bash
$ npm run enter:docker
```

Docker-compose build

```bash
$ npm run build:docker
```

Stop and clean all instances, images, containers and volumes of this application

```bash
$ npm run clean:docker
```

#### JSPM Commands

Bundle application dependencies

```bash
$ npm run bundle:jspm
```

Unbundle application dependencies

```bash
$ npm run unbundle:jspm
```

#### ESlint Commands

```bash
$ npm run check:eslint
```

#### NodeSass Commands

```bash
$ npm run buildcss:nodesass
```

#### Deploy in Firebase 

You have to login via command line in your OWN account):

```bash
$ firebase deploy
```

#### Common Pitfalls

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
   
* No space left on device!, you can solve it deleting this file

```bash
$ ls -lah ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/Docker.qcow2
``` 

* Not connecting to the Docker container:

```
ERROR: dial unix /Users/sloppylopez/Library/Containers/com.docker.docker/Data/00000003.00000948: connect: connection refused

npm ERR! Darwin 16.7.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "run" "start:docker"
```

Solve it using :

```bash
$ npm run clean:docker
``` 

#### Contributing

See the [CONTRIBUTING Guidelines](https://github.com/sloppylopez/slush-jspm-react-seed/blob/master/CONTRIBUTING.md)

#### Support
If you have any problem or suggestion please open an issue [here](https://github.com/sloppylopez/slush-jspm-react-seed/issues).

#### License 

The MIT License

Copyright (c) 2017, Sergio Lopez

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
