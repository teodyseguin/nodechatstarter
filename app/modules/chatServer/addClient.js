'use strict';

var ban         = require('./handlers/ban');
var config      = require('../../config')[process.env.NODE_ENV || 'dev'];
var http        = require('http');
var logger      = require('../../utilities/logger');
var message     = require('./handlers/message');
var querystring = require('querystring');

/**
 * Adds a client to the chat server
 *
 * @param io
 *   the societ.io instance
 * @param socket
 *   a returned argument of a callback upon connection
 *   e.g. io.on('connection, function(socket){})
 */
function addClient(io, socket) {
  socket.on('chat_send', function(data) {
    /**
     * Put here your codes which you wanted
     * to do when client chat emit this evnet
     */ 
  });

  socket.on('ban_send', function(data) {
    /**
     * Put here your codes which you wanted
     * to do when client chat emit this event
     */ 
  });

  socket.on('disconnect', function() {
    logger('user disconnected');
  });
}

module.exports = addClient;

