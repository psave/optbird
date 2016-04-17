//= require jquery
//= require jquery_ujs


$(document).ready(function() {

  $('#button').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'GET',
      url: '/charts/show',
      dataType: 'json',
      contentType: 'application/json',
      success: function(data) {
        data.forEach(function(){
          for (var i = 0; i < data.length; i++) {
            $('.chart').append('<p>' + data[i].date_time + '</p>');
            $('.chart').append('<p>' + data[i].occupants + '</p>');
          }
        });
      }
    }); 
  });

})

//= require highcharts
//= require highstock
//= require highstock/modules/exporting
//= require_tree .

