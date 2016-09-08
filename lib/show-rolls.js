const $ = require('jquery');

const Roll = require('./rolls.js');

function showRolls(){
  Roll.index(displayRolls);
}

function displayRolls(data){
  const $historicalRolls = $('.historical-rolls');
  $historicalRolls.empty();
  data.rolls.forEach(function(r){
    $historicalRolls.prepend('<p>'+r+'<p>');
  });
}

module.exports = showRolls;
