# Docker Nginx NodeJS
Enterprise level bare bones Web Server & Application Server configuration template for Web development purposes

## Prerequisites
    * Docker
    * Docker-Compose
  
## Features:
    * Express Server
    * Correct use of Docker caches, fast builds
    * Install inside Docker without root user

## Installation
You need to add this line to your hosts file:

```
127.0.0.1 docker.nginx.node.com
```

then

```bash
$ npm install
```

### Available commands
Dockerless NodeJS Server
```bash
$ npm start
```

Docker Nginx + Docker NodeJS Server connected using HTTPS and Custom Domain
```bash
$ npm run start:docker
```

Stop Docker process
```bash
$ npm run stop:docker
```

Run arbitrary command inside the container
```bash
$ npm run exec:docker -- echo 'I am inside the container'
```

Run arbitrary command inside the container (docker natively)
```bash
$ docker-compose run --rm node-server /bin/bash -c 'echo "I am inside the container"'
```

### Application Home page
[https://docker.nginx.node.com](#https://docker.nginx.node.com)

### Workflow example

#### Run app on NodeJS server in local
    1)npm run clean:docker
    2)npm start:reload
    3)Open browser at http://docker.nginx.node.com:8080/

### Pitfalls
In case you see this message:

         Updating registry cache...
         Looking up github:twbs/bootstrap
         Downloading github:twbs/bootstrap@3.3.1
    
    err  Error downloading github:twbs/bootstrap
    
         GitHub rate limit reached. To increase the limit use GitHub authentication.
         Run jspm endpoint config github to set this up.
    
    warn Installation changes not saved.

You will need to pass your JSPM_GITHUB_AUTH_TOKEN to the seed, to do so just type:

```bash
$ jspm registry export github
```

And copy the value of registries.github.auth in Dockerfile <JSPM_GITHUB_AUTH_TOKEN>  
Notice that you will need a global jspm installed in your HOST machine do do this task

More info can be found here regarding tokens and authentication
https://gist.github.com/topheman/25241e48a1b4f91ec6d4

Enjoy!

ڪ.

## License 

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





