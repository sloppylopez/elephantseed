# By default we use the Node.js version set in your package.json or the latest
# version from the 0.10 release
#
# You can use nvm to install any Node.js (or io.js) version you require.
# nvm install 4.0
nvm install 5.1.0
npm i
# Install grunt-cli for running your tests or other tasks
npm install -g jspm firebase-tools slush
jspm config registries.github.auth $JSPM_GITHUB_AUTH_TOKEN
cd templates && jspm i