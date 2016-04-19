 // Hardcoded data for getting started with bulma
 
 $(function () {
   $('#overview-firstGraph').highcharts({
     title: {
       text: 'Room 182 Occupancy',
       x: -20 //center
     },
     xAxis: {
      title: {
         text: 'Time'
       },
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





/***************************/

// $(function() {
// //   // obtaining element by id and parsing to JSON to check out what it is.
//   var alldata = $.parseJSON($('#seriesdata').text());
  
  
//   $('#overview_line_chart').highcharts('StockChart',{

//     title: {
//       text: "Occupancy of Irving Room 182"
//       // text: y.name
//     },
//     rangeSelector: {
//       allButtonsEnabled: true,
//       selected: 1
//     },
//     xAxis: {
//       categories: alldata.xaxis.map(function(time){ return moment(time).format("H:mm")}),
//       type: 'units'
//       //type: "datetime"
//     },
//     yAxis: {
//       title: {
//         text: "# Occupants"
//       }
//     },
//     series: [{
//       name: 'Occupants',
//       data: alldata.data
//     }],
//   });


// });

// $(document).ready(function() {

<<<<<<< HEAD:app/assets/javascripts/overview.js
//   $('#button').on('click', function(e) {
//     e.preventDefault();
//     $.ajax({
//       method: 'GET',
//       url: '/overview/show',
//       dataType: 'json',
//       contentType: 'application/json',
//       success: dataToArray
//     }); 
//   });
=======
  $('#button').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'GET',
      url: '/overviews/show',
      dataType: 'json',
      contentType: 'application/json',
      success: dataToArray
    }); 
  });
>>>>>>> 8ef4b9d6c8e4a0309c3082d714e8985a11eba7bc:app/assets/javascripts/overviews.js

//   var series = {};

//   function dataToArray(response) {
//     var y_axis = [];
//     var x_axis = [];

//     for (var i = 0; i < response.length; i++) {
//       y_axis.push(response[i].occupants);
//       x_axis.push(response[i].date_time);
//     }

//     series = {
//       y_axis: y_axis,
//       x_axis: x_axis
//     };

//     dataToChart();
//   }

//   function dataToChart() {
//     $('#overview_line_chart').highcharts({
//       title: {
//           text: 'Dummy Data',
//           x: -20 //center
//       },
//       subtitle: {
//           text: 'Awesome subtitle',
//           x: -20
//       },
//       xAxis: {
//           categories: series.x_axis.map(function(time){ return moment(time).format("H:mm")}),
//       },
//       yAxis: {
//           title: {
//               text: 'Number of Occupants'
//           },
//           plotLines: [{
//               value: 0,
//               width: 1,
//               color: '#808080'
//           }]
//       },
//       tooltip: {
//           valueSuffix: ''
//       },
//       legend: {
//           layout: 'vertical',
//           align: 'right',
//           verticalAlign: 'middle',
//           borderWidth: 0
//       },
//       series: [{
//         name: 'Occupants',
//         data: series.y_axis
//       }]
//     });
//   }

// });
