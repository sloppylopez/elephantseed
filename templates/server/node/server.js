const PORT = 8080,
    chalk = require("chalk"),
    express = require("express"),
    log = console.log,
    path = require("path"),
    server = express();

require("./browsersync.init");

server.use(express.static(
    path.join(__dirname, "../../app"))
);
server.use(express.static(
    path.join(__dirname, "../../app/jspm_packages/github"))
);
server.use(express.static(
    path.join(__dirname, "../../app/jspm_packages/npm"))
);

server.get("/", (req, res) => {
    res.sendFile(path.join(`${__dirname  }../../app/index.html`));
});

server.listen(PORT);

log(chalk.magenta("(づ ￣ ³￣)づ ") +
  chalk.blue(`Node server listening on *:${PORT}`));
