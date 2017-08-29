const shell = require("shelljs"),

    // eslint-disable-next-line sort-vars
    exec = function exec (command, options) {
        return new Promise((resolve, reject) => {
            shell.exec(command, options, (code, stdout, stderr) => {
                if (code !== 0) reject(stderr);
                return resolve();
            });
        });
    };

module.exports = exec;
