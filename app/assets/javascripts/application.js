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
        console.log(data[0].date_time);
        // data.forEach(function() {
        //   $('.chart').append('<p>' + data.date_time + '</p>');
        //   $('.chart').append('<p>' + data.occupants + '</p>');
        // });
      }

    });
  
  });

})