const fs = require("fs"),
    path = require("path"),
    chalk = require("chalk"),
    exec = require("./shell"),
    log = console.log,
    DIST_FOLDER = path.join(__dirname, "../../app/dist"),
    BUNDLE = "npm run bundle:jspm",
    UNBUNDLE = "npm run unbundle:jspm",

    getDistFiles = function () {

        return new Promise((resolve, reject) => {

            if(fs.existsSync(DIST_FOLDER)) {

                fs.readdir(DIST_FOLDER, (err, files) => {

                    if (err) reject(err);
                    resolve(files);

                });

            }

        });

    },
    appChanges = function (event, file) {

        return new Promise((resolve) => {

            if (event === "change") {

                log(chalk.magenta("(づ ￣ ³￣)づ ") + chalk.green(`${event} => ${file}`));
                this.getDistFiles()
        .then((files) => exec(files.length > 0 ? BUNDLE : UNBUNDLE, {"async": true}));

            } else {

                resolve();

            }

        });

    };

module.exports = {
    exec,
    getDistFiles,
    appChanges
};
