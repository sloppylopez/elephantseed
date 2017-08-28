const shell = require("shelljs");

function exec (command, options) {

    return new Promise((resolve, reject) => {

        shell.exec(command, options, (code, stdout, stderr) => {

            if (stderr) reject(stderr);
            resolve();

        });

    });

}

module.exports = exec;
