

$(function() {
  // obtaining element by id and parsing to JSON to check out what it is.
  var data = $.parseJSON($('#seriesdata').text());
  
  
  // console.log(y.date_or_time);
  
  $('#overview_line_chart').highcharts({

    title: {
      text: "Occupancy of Irving Room 182"
      // text: y.name
    },
    xAxis: {
      categories: data.date_or_time.map(function(time){ return moment(time).format("H mm")}),
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
      data: data.data
    }],
  });
});