const fs = require("fs"),
    path = require("path");
// eslint-disable-next-line sort-vars
const BUNDLE = "npm run bundle:jspm",
    DIST_FOLDER = path.join(__dirname, "../../app/dist"),
    UNBUNDLE = "npm run unbundle:jspm";

const getBundleCommand = function getBundleCommand (length) {
        return length > 0 ? BUNDLE : UNBUNDLE;
    }, getDistFiles = function getDistFiles () {
        return new Promise((resolve, reject) => {
            if(fs.existsSync(DIST_FOLDER)) {
                fs.readdir(DIST_FOLDER, (err, files) => {
                    if (err) reject(err);
                    return resolve(files);
                });
            } else {
                return resolve([]);
            }
        });
    };

module.exports = {
    getBundleCommand,
    getDistFiles
};
