/////////     This is the JS file for the graph currently on the "graph4" tab.

//////  TODO / WARNING :  Every select (like in a $('xyz') call) in this file should have '#graph4'
//////                        added to the front, like $('#graph4 xyz')

function graph4(response) {
  
    Highcharts.setOptions({
      chart: {
        style: {
          fontFamily: 'Helvetica'
        }
      }
    });

    $('#graph4 #graphContainer').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Rooms Ranked by Occupancy'
        },
        xAxis: {
            categories: ['ANGU 132', 'ANGU 133', 'ANGU 135', 'ANGU 291', 'ANGU 232', 'ANGU 233', 'ANGU 234', 'CEME 1202', 'CEME 1204', 'DMP 101', 'DMP 110', 'HENN 200', 'HENN 201', 'HENN 202']
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Average of Occupancy as % of Capacity'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Room',
            data: [49, 71, 95, 60, 83, 78, 98, 93, 48, 38, 39, 41, 42, 33]
        }]
    });
}
