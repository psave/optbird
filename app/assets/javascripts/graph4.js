function graph4() {

  $('#graph4 #graphContainer').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Insert Title Here'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['Shanghai', 23.7],
            ['Lagos', 16.1],
            ['Istanbul', 14.2],
            ['Karachi', 14.0],
            ['Mumbai', 12.5],
            ['Moscow', 12.1],
            ['São Paulo', 11.8],
            ['Beijing', 11.7],
            ['Guangzhou', 11.1],
            ['Delhi', 11.1],
            ['Shenzhen', 10.5],
            ['Seoul', 10.4],
            ['Jakarta', 10.0],
            ['Kinshasa', 9.3],
            ['Tianjin', 9.3],
            ['Tokyo', 9.0],
            ['Cairo', 8.9],
            ['Dhaka', 8.9],
            ['Mexico City', 8.9],
            ['Lima', 8.9]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
  });

}