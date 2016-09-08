const $ = require('jquery');

const Roll = require('./rolls.js');

function createRoll(){
  Roll.create(handleSuccess);
}

function handleSuccess(data){
  const $hexagontent = $('.hexagontent');
  $('.historical-rolls').empty();
  $hexagontent.empty();
  $hexagontent.append(data.result);
}

module.exports = createRoll;
