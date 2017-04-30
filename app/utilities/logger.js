'use strict';

function logger(string) {
  if (process.env.NODE_ENV !== 'test' || process.env.NODE_ENV !== 'prod') {
    console.log('-- logger --');
    console.log(string);
    return;
  }

  return false;
}

module.exports = logger;

