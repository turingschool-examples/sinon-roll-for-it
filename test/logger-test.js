const sinon = require('sinon');
const assert = require('assert');

const logger = require('../lib/logger.js');

describe('Logger', function () {

  // How do we even test a method that just logs to the console?
  function logger(message) {
    console.log('LOG: ' + message);
    return message;
  }

  beforeEach(function () {
    sinon.spy(console, 'log');
  });

  afterEach(function () {
    console.log.restore();
  });

  it.skip('should log to the console', function () {
    logger('some message');
    assert(console.log.calledOnce);
  });

  it.skip('should log prefix the message with "LOG: "', function () {
    logger('some message');
    assert(console.log.calledWith('LOG: some message'));
  });

});
