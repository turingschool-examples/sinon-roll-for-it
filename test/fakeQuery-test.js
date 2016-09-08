const sinon = require('sinon');
const assert = require('assert');

describe('fakeQuery', function () {

  var fakeData = { ideas: [
    { title: 'Learn JavaScript', quality: 0 },
    { title: 'Test JavaScript', quality: 2 }
  ] };

  var fakeQuery = {
    getJSON: function (url, callback) {
      setTimeout(function () {
        callback(fakeData);
      }, 1000);
    }
  };

  it.skip('should call the callback when it hears back from the server', function (done) {
    var spyCallback = sinon.spy(function () {
      assert(spyCallback.called);
      done();
    });

    fakeQuery.getJSON('/bogus', spyCallback);
  });

  it.skip('should call the callback with fakeData', function (done) {
    var spyCallback = sinon.spy(function () {
      assert(spyCallback.calledWith(fakeData));
      done();
    });

    fakeQuery.getJSON('/bogus', spyCallback);
  });
});
