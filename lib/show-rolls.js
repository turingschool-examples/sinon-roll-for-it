const $ = require('jquery');

function showRolls(){
  $.getJSON('/rolls', displayRolls);
}

function displayRolls(data){
  const $historicalRolls = $('.historical-rolls');
  $historicalRolls.empty();
  data.rolls.forEach(function(r){
    $historicalRolls.prepend('<p>'+r+'<p>');
  });
}

module.exports = showRolls;
