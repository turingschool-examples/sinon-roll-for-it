var roll = require('./roll.js');

var play = {
  castMagicMissile: function(){
    var newRoll = roll.dTwenty();
    if (newRoll < 20) {
      return this.cheat(newRoll);
    } else {
      return newRoll;
    }
  },
  cheat: function(newRoll) {
    return newRoll + 1;
  }
};

module.exports = play;
