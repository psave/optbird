$(document).ready(function() {

  $('#button').on('click', function(event) {
    event.preventDefault();
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
    var x_axis = [];
    var y_axis = [];

    for (var i = 0; i < response.length; i++) {
      x_axis.push(response[i].date_time);
      y_axis.push(response[i].occupants);
    }

    series = {
      x_axis: x_axis,
      y_axis: y_axis
    };

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

        categories: series.x_axis.map(function(time){ return moment(time).format('H:mm')}),
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

      // tooltip: {
      //   valueSuffix: ''
      // },

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

        // pointStart: series.x_axis[0],
        // pointInterval: 5*60,


        tooltip: {
          valueDecimals: 2
        }
      }]
    });
  }

});
