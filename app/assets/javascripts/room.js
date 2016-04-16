$(function () {
  $('#room-firstGraph').highcharts({
    title: {
      text: 'Room 182 Occupancy',
      x: -20 //center
    },
    xAxis: {
      categories: ['10:20:00', '10:25:00', '10:30:00', '10:35:00', '10:40:00', '10:45:00', '10:50:00', '10:55:00', '11:00:00', '11:05:00', '11:10:00', '11:15:00']
    },
    yAxis: {
      title: {
        text: 'Occupants'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: 'Occupants'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: 'Room 182',
      data: [98, 101, 31, 29, 28, 33, 38, 57, 82, 92, 94, 95]
    }]
  });
});
