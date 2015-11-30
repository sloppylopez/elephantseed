import express from 'express';

var server = express();

server.use(express.static('.'));
server.use(express.static('views'));
server.use(express.static('build'));
server.use(express.static('build/bundle'));
server.use(express.static('./jspm_packages'));

server.get('/', function (req, res) {
    res.render('index')
});

console.log('server listening on port: 3000');
server.listen(3000);