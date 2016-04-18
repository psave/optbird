$(document).ready(function() {

  $('#button').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'GET',
      url: '/charts/show',
      dataType: 'json',
      contentType: 'application/json',
      success: dataToArray
    }); 
  });

  var series = {};

  function dataToArray(response) {
    var y_axis = [];
    var x_axis = [];

    for (var i = 0; i < response.length; i++) {
      y_axis.push(response[i].occupants);
      x_axis.push(response[i].date_time);
    }

    series = {
      y_axis: y_axis,
      x_axis: x_axis
    };
    console.log(series.x_axis);

    dataToChart();
  }

  function dataToChart() {
    $('#container').highcharts('StockChart', {
      rangeSelector: {
        selected: 1
      },      
      title: {
        text: 'Dummy Data',
        x: -20 //center
      },
      subtitle: {
        text: 'Dummy Data',
        x: -20
      },
      xAxis: {
        categories: series.x_axis.map(function(time){ return moment(time).format('MMMM Do YYYY, h:mm')}),
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
