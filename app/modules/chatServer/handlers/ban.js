'use strict';

var config        = require('../../../config')[process.env.NODE_ENV || 'dev'];
var http          = require('http');
var logger        = require('../../../utilities/logger');
var printResponse = require('../../../utilities/printResponse');
var querystring   = require('querystring');

/**
 * Send a message to Drupal chat log
 *
 * @param http
 *   the http instance, after requiring the http module
 * @param options
 *   an object containing details for the request to be performed
 * @param ban
 *   a ban object
 *   {
 *
 *   }
 *   this maybe null, if the handler call is made for GET
 * @param callback
 *   an anonymous function the will deliver back the results
 * @return callback()
 *   may contain no error + blank object OR the error message
 */
function handler(http, options, ban, callback) {
  /**
   * Reuse the code below if ever you wanted to
   * pass the ban job to a different server.
   *
   * Otherwise, if the job is going to happen on
   * the same server, feel free to put your own
   * down below.
   *
   *
  var request = http.request(options, function(response) {
    response.setEncoding('utf-8');

    var responseString = '';
    response.on('data', (data) => {
      responseString += data;
    });
      
    response.on('end', function() {
      try {
        var resultObject = JSON.parse(responseString);
        return callback(null, resultObject);
      }
      catch(e) {
        return callback(e);
      }
    });
  }); 

  request.on('error', function(error) {
    return callback(error);
  });

  if (ban && options.method === 'POST') {
    request.write(ban);
  }

  request.end();
  */
}

/**
 * Response handler for when someone want's to send a ban
 */
function bans(request, response) {
  /**
   * Reuse the code below if ever you wanted to
   * pass the ban job to a different server.
   *
   * Otherwise, if the job is going to happen on
   * the same server, feel free to put your own
   * down below.
   *
   *
  var banData = querystring.stringify(request.body.params);
  var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': banData.length
  };
  var options = {
    host: config.host.name,
    port: config.host.port,
    method: request.method,
    path: config.host.chatBan,
    headers: headers
  };

  handler(http, options, banData, function(error, result) {
    printResponse(error, response, result);
  });
  */
}

module.exports = {
  handler : handler,
  bans    : bans,
};

