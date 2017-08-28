const PORT = 8080,
    express = require("express"),
    path = require("path"),
    app = express(),
    chalk = require("chalk"),
    log = console.log;

require("./browsersync.init");

app.use(express.static(path.join(__dirname, "../../app")));
app.use(express.static(path.join(__dirname, "../../app/jspm_packages/github")));
app.use(express.static(path.join(__dirname, "../../app/jspm_packages/npm")));

app.get("/", (req, res) => {

    res.sendFile(path.join(`${__dirname  }../../app/index.html`));

});

app.listen(PORT);

log(chalk.magenta("(づ ￣ ³￣)づ ") + chalk.blue(`Node server listening on *:${PORT}`));
