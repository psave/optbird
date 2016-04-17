
$(function() {
  // obtaining element by id and parsing to JSON to check out what it is.
  var alldata = $.parseJSON($('#seriesdata').text());
  // var alldata = $.getJSON($(@series));

  // console.log(y.date_or_time);
  
  $('#overview_line_chart').highcharts({

    title: {
      text: "Occupancy of Irving Room 182"
      // text: y.name
    },
    rangeSelector: {
      allButtonsEnabled: true,
      selected: 2
    },
    xAxis: {
      categories: alldata.xaxis.map(function(time){ return moment(time).format("H:mm")}),
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
      data: alldata.data
    }],
  });

});

// $(function() {

//   $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function(data) {
//       // Create the chart
//     window.chart = new Highcharts.StockChart({
//       chart: {
//         renderTo: 'container'
//       },

//       rangeSelector: {
//         selected: 1,
//         inputDateFormat: '%Y-%m-%d'
//       },

//       title: {
//         text: 'AAPL Stock Price'
//       },

//       series: [{
//         name: 'AAPL',
//         data: data,
//         tooltip: {
//           valueDecimals: 2
//         }}]

//     }, function(chart) {

//       // apply the date pickers
//       setTimeout(function() {
//         $('input.highcharts-range-selector', $('#' + chart.options.chart.renderTo)).datepicker()
//       }, 0)
//     });
//   });


//     // Set the datepicker's date format
//   $.datepicker.setDefaults({
//     dateFormat: 'yy-mm-dd',
//     onSelect: function(dateText) {
//       this.onchange();
//       this.onblur();
//     }
//   });

// });
