#!/bin/bash

#Install travis-cli command line to be able to encrypt api_keys in the Travis build
sudo gem install travis
#Encrypt your code climate key for Travis build and add it automatically to your .travis.yml
#remember explicitly declare this variables in
travis encrypt CODECLIMATE_REPO_TOKEN=<YOUR_CODE_CLIMATE_TOKEN> --add
travis encrypt FIREBASE_TOKEN=<YOUR_FIREBASE_TOKEN> --add
travis encrypt JSPM_GITHUB_AUTH_TOKEN=<YOUR_JSPM_GITHUB_AUTH_TOKEN> --add

#Install npm global dependencies
npm install -g jspm firebase-tools slush

#Check versions of installed dependencies
jspm -v
firebase-tools -v
slush -v
#eslint --version
uname -r
