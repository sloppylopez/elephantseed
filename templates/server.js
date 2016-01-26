import express from 'express';
import fs from 'fs';

var server = express();

server.use(express.static('.'));

server.get('/', function (req, res) {
    res.render('index')
});

console.log('ElephantSeed listening on port: 3000');
server.listen(3000);

// make sure to require fs module
fs.writeFile(__dirname + '/restart.log', 'restart', function (err) {
    if (err) {
        throw err;
    }
    console.log('Server restart logged at restart.log file');
});