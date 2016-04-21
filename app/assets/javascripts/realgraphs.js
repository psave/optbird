$(document).ready(function() {

  $.ajax({
    method: 'GET',
    url: '/realgraphs/show',
    dataType: 'json',
    contentType: 'application/json',
    success: dataToArray
  });
  console.log("the line after the ajax request");

  var series = {};

  // TODO: response is everything in the occupants table -
  // you need to filter it in some way to make useful graphs

  // try graphing all occupancy over time from one room
  function dataToArray(response) {
    console.log("inside dataToArray");
    var x_axis = [];
    var y_axis = [];
    console.log(response.length + " elements in response");
    console.log(response[0]);
    console.log("for i = 0: sample_time = " + response[0].sample_time);
    console.log("for i = 0: number_occupants = " + response[0].number_occupants);
    console.log("for i = 1: sample_time = " + response[1].sample_time);
    console.log("for i = 1: number_occupants = " + response[1].number_occupants);
    console.log("for i = 2: sample_time = " + response[2].sample_time);
    console.log("for i = 2: number_occupants = " + response[2].number_occupants);

    for (var i = 0; i < response.length; i++) {
      if (response[i].room_id == 2) {
        x_axis.push(response[i].sample_time);
        y_axis.push(response[i].number_occupants);
      }
    }

    series = {
      x_axis: x_axis,
      y_axis: y_axis
    };

    dataToChart();
  }

  function dataToChart() {
    console.log("inside dataToChart");
    $('#graphContainer').highcharts({      
      title: {
        text: 'Occupancy over Time',
        x: -20 //center
      },
      subtitle: {
        text: 'for room_id = 2',
        x: -20
      },
      xAxis: {
        type: 'datetime',
        categories: series.x_axis.map(function(time){ return moment(time).format("H:mm")}),
      },
      yAxis: {
        title: {
            text: 'Number of Occupants'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
      },
      tooltip: {
        valueSuffix: ''
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      series: [{
        name: 'Occupants',
        data: series.y_axis,
        tooltip: {
          valueDecimals: 2
        }
      }]
    });
  }

});
