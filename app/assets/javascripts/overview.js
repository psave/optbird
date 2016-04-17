

// $(function() {
//   // obtaining element by id and parsing to JSON to check out what it is.
//   var data = $.parseJSON($('#seriesdata').text());
  
//   // console.log(y.date_or_time);
  
//   $('#overview_line_chart').highcharts({

//     title: {
//       text: "Occupancy of Irving Room 182"
//       // text: y.name
//     },
//     xAxis: {
//       categories: data.xaxis.map(function(time){ return moment(time).format("H:mm")}),
//       type: 'units'
//       //type: "datetime"
//     },
//     yAxis: {
//       title: {
//         text: "# Occupants"
//       }
//     },
//     // series: [{
//     //         name: 'Occupants',
//     //         data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
//     // }],
//     series: [{
//       name: 'Occupants',
//       data: data.data
//     }],
//   });

// });

// $(function () {
//   var data = $.parseJSON($('#seriesdata').text()); 
//   // $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=new-intraday.json&callback=?', function (data) {
//       // create the chart
//     $('#overview-highstock').highcharts('StockChart', {


//       title: {
//         text: 'AAPL stock price by minute'
//       },

//       subtitle: {
//         text: 'Using ordinal X axis'
//       },

//       xAxis: {
//         gapGridLineWidth: 0
//       },

//       rangeSelector : {
//         buttons : [{
//             type : 'hour',
//             count : 1,
//             text : '1h'
//         }, {
//             type : 'day',
//             count : 1,
//             text : '1D'
//         }, {
//             type : 'all',
//             count : 1,
//             text : 'All'
//         }],
//         selected : 1,
//         inputEnabled : false
//     },

//     series : [{
//       name : 'AAPL',
//       type: 'area',
//       data : data,
//       gapSize: 5,
//       tooltip: {
//         valueDecimals: 2
//       },
//       fillColor : {
//         linearGradient : {
//           x1: 0,
//           y1: 0,
//           x2: 0,
//           y2: 1
//         },
//         stops : [
//           [0, Highcharts.getOptions().colors[0]],
//           [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//         ]
//         },
//         threshold: null
//       }]
//     });
// });