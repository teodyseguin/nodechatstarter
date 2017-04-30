'use strict';

var config        = require('../../../config');
var http          = require('http');
var logger        = require('../../../utilities/logger');
var printResponse = require('../../../utilities/printResponse');

/**
 * @param http
 *   the http instance, after requiring the http module
 * @param options
 *   an object filled with hosting details, to be sent on the request
 * @param message
 *   a message object
 *   {
 *
 *   }
 *   this maybe null, if the handler call is made for GET
 * @param callback
 *   an anonymous function the delivers back the returned result
 */
function handler(http, options, message, callback) {
  /**
   * Reuse the code below if ever you wanted to
   * pass the ban job to a different server.
   *
   * Otherwise, if the job is going to happen on
   * the same server, feel free to put your own
   * down below.
   *
   *
  var request = http.request(options, (response) => {
    response.setEncoding('utf-8');

    var responseString = '';
    response.on('data', (data) => {
      responseString += data;
    }); 

    response.on('end', () => {
      logger('response end');
      logger(responseString);

      try {
        var resultObject = JSON.parse(responseString);
        return callback(null, resultObject);
      }
      catch(e) {
        return callback(e);
      }
    });
  }); 

  request.on('error', function(e) {
    return callback(e);
  });

  if (message && options.method === 'POST') {
    request.write(message);
  }

  request.end();
  */
}

/**
 * Response handler for when someone want's to send a message
 */
function messages(request, response) {
  /**
   * Reuse the code below if ever you wanted to
   * pass the ban job to a different server.
   *
   * Otherwise, if the job is going to happen on
   * the same server, feel free to put your own
   * down below.
   *
   *
  var messageData = querystring.stringify(request.body.params);
  var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': messageData.length
  };
  var options = {
    host: config.host.name,
    port: config.host.port,
    method: request.method,
    path: config.host.api.chatLog,
    headers: headers
  };

  handler(http, options, messageData, function(error, result) {
    printResponse(error, response, result);
  });
  */
}

module.exports = {
  handler  : handler,
  messages : messages 
};

