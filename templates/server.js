import express from 'express';

var server = express();

server.use(express.static('.'));

server.get('/', function (req, res) {
    res.render('index')
});

console.log('Frictionless server listening on port: 3000');
server.listen(3000);