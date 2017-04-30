'use strict'

/**
 * A reusable function to output the response
 *
 * @param error
 *   the error argument after the request went through
 * @param response
 *   the reponse header
 * @param results
 *   the results obtain, after successful request
 */
function printResponse(error, response, results) {
  if (error) {
    response.write(JSON.stringify(error));
    response.end();
    return {
      error: true,
      message: JSON.stringify(error)
    };
  }

  try {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(results));
    return {
      error: false,
      resource: JSON.stringify(results)
    }
  }
  catch(err) {
    response.end();
  }
}

module.exports = printResponse;

