FROM node:6.10.1

ARG JSPM_GITHUB_AUTH_TOKEN

ENV USER="whalephant"
ENV YARN_VERSION=0.27.5
ENV HOME=/home/$USER
ENV LOOK_UP_TIME=480

LABEL vendor=SloppyLopez\
      com.whalephant-seed.version="1.0.0" \
      com.whalephant-seed.release-date="2017-03-25"

RUN useradd -ms /bin/bash $USER

#Copy files to container
COPY package.json yarn.lock $HOME/
ADD server/node $HOME/
COPY app/package.json app/yarn.lock app/config.js $HOME/app/
RUN chown -R $USER:$USER $HOME/*

WORKDIR $HOME
USER $USER

#Install Server dependencies
RUN npm i yarn@$YARN_VERSION &&\
    yarn

#Install App dependencies
RUN cd app &&\
    yarn &&\
    ./node_modules/.bin/jspm config registries.github.timeouts.lookup $LOOK_UP_TIME &&\
    ./node_modules/.bin/jspm config registries.github.auth $JSPM_GITHUB_AUTH_TOKEN &&\
    ./node_modules/.bin/jspm i --lock

CMD ["npm", "start"]