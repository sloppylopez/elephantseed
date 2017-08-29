const BUILDCSS = "npm run buildcss:nodesass",
    chalk = require("chalk"),
    exec = require("./exec"),
    getBundleCommand = require("./core").getBundleCommand,
    getDistFiles = require("./core").getDistFiles,
    log = console.log,
    options = {"async": true};

const app = function app (event, file) {
        return new Promise((resolve) => {
            if (event === "change") {
                log(chalk.magenta("(づ ￣ ³￣)づ ") +
                chalk.green(`${event} => ${file}`));
                getDistFiles()
                    .then((files) =>
                      exec(getBundleCommand(files.length), options))
                    .then(() => resolve());
            } else {
                return resolve();
            }
        });
    }, css = function css () {
        return new Promise(() => exec(BUILDCSS, options));
    };

module.exports = {
    app,
    css
};
