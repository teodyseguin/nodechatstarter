var app         = require('express')();
var chatServer  = require('./app/modules/chatServer');
var config      = require('./app/config')[process.env.NODE_ENV || 'dev'];
var http        = require('http').Server(app);
var http2       = require('http');
var io          = require('socket.io')(http);
var logger      = require('./app/utilities/logger');

// Simple port connection
http.listen(3000, function() {
  logger('listening on *: 3000');
});

// Socket IO
io.on('connection', function(socket) {
  logger('user connected from ' + socket.request.connection.remoteAddress);

  // Add client to the chat server.
  chatServer.addClient(io, socket);
});

// Routes and Endpoints
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
// API Endpoint for sending message
app.use('/v1/chat/messages', chatServer.messageRouter);
// API Endpoint for retrieving(GET) user bans and sending(POST) new user bans
app.use('/v1/chat/bans', chatServer.banRouter);

