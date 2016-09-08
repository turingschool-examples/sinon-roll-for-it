const sinon = require('sinon');
const assert = require('assert');

describe('APIFetcher', function () {

  var Twitter = {
    get: function () {
      // Crazy stuff happens over the network…
    }
  }

  beforeEach(function () {
    var stub = sinon.stub(Twitter, 'get');
    stub.withArgs('/users').returns([
      { username: 'stevekinney', tweetCount: 5 },
      { username: 'jcasimir', tweetCount: 3 }
    ]);
  });

  it.skip('should return the stubbed data', function () {
    var users = Twitter.get('/users');
    assert.equal(users[0].username, 'stevekinney');
  });
});
