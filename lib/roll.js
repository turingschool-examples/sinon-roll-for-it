var roll = {
  dTwenty: function(){
    return Math.floor(Math.random() * (20 - 1 + 1) + 1);
  }
}

module.exports = roll;
