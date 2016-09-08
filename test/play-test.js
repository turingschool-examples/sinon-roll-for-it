const sinon = require('sinon');
const assert = require('assert');

const roll = require('../lib/roll.js');
const play = require('../lib/play.js');

describe('Play.castMagicMissile', function () {
  it.skip('should cheat on a lousy dTwenty Roll', function () {
    var critical_fail = 1;

    var stub = sinon.stub(roll, 'dTwenty').returns(critical_fail);

    var mock = sinon.mock(play);
    mock.expects("cheat").once().withArgs(critical_fail);

    play.castMagicMissile();

    mock.verify();
    stub.restore();
    mock.restore();
  });

  it.skip('should not cheat on a natural 20', function () {
    var natural_twenty = 20;

    var stub = sinon.stub(roll, 'dTwenty').returns(natural_twenty);
    var mock = sinon.mock(play);
    mock.expects("cheat").never();

    play.castMagicMissile();

    mock.verify();
    stub.restore();
    mock.restore();
  });
});
