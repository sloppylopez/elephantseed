# Why?
We like to do scss > css on build time instead of browser side for speed reasons, it takes 3 seconds right now is we use it(so no way man)
The process is transparent and wrapped by npm in package.json

# Main file

The main file (usually labelled `main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. 
This file should not contain anything but `@import` and comments.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Main file](http://sass-guidelin.es/#main-file)
