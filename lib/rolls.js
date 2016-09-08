const $ = require('jquery');

var Roll = {
  create: function(callback){
    $.ajax({
      type: 'POST',
      url: '/rolls',
      data: {},
      success: function(data){
        callback(data);
      }
    });
  },
  index: function(callback){
    $.getJSON('/rolls', callback);
  }
}

module.exports = Roll;
