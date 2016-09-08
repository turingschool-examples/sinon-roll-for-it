const $ = require('jquery');
require('./style.scss');

const createRoll = require('./create-roll.js');
const showRolls = require('./show-rolls.js');

$('.roll-die').on('click', function(){
  createRoll();
});

$('.show-historical').on('click', function(){
  showRolls();
});
