const $ = require('jquery');

function createRoll(){
  sendPost();
}

function sendPost(){
  $.ajax({
    type: 'POST',
    url: '/rolls',
    data: {},
    success: function(data){
      handleSuccess(data);
    }
  });
}

function handleSuccess(data){
  const $hexagontent = $('.hexagontent');
  $('.historical-rolls').empty();
  $hexagontent.empty();
  $hexagontent.append(data.result);
};

module.exports = createRoll;
