let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
app.use('/', express.static('app'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/app/index.html');
});
//TODO fix me.
// app.get('/chat', function(req, res){
//   res.sendFile(__dirname + '/app/chat.html');
// });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(8080, function(){
  console.log('Whalephant Node server listening on *:8080');
});