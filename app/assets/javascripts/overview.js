

$(function() {

  var x = $('#seriesdata').text();
  var y = $.parseJSON(x);
  console.log(y.date_or_time);
  
  $('#overview_line_chart').highcharts({

    title: {
      // text: "Occupancy of Irving Room 182"
      text: y.name
    },
    xAxis: {
      time: y.date_or_time,
      type: 'units'
      //type: "datetime"
    },
    yAxis: {
      title: {
        text: "# Occupants"
      }
    },
    // series: [{
    //         name: 'Occupants',
    //         data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
    // }],
    series: [{
      name: 'Occupants',
      data: y.data
    }],
  });
});