FROM node:6.10.1
ENV HOME=/home/whalephant
ENV JSPM_GITHUB_AUTH_TOKEN=ch4nG3m3xvcHB5bG9wZXo6MThOM2

LABEL vendor=SloppyLopez\
      com.whalephant-seed.version="1.0.0" \
      com.whalephant-seed.release-date="2017-03-25"

RUN useradd -ms /bin/bash whalephant

COPY package.json npm-shrinkwrap.json $HOME/
COPY app/package.json app/npm-shrinkwrap.json app/config.js $HOME/app/
RUN chown -R whalephant:whalephant $HOME/*

USER whalephant
WORKDIR $HOME
RUN npm i &&\
    cd app && npm i &&\
    node_modules/.bin/jspm i --lock

CMD ["node", "server.js"]