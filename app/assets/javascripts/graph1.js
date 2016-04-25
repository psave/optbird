

  // var totals = {};


  // function avg(array) {
  //   var arr = array.reduce( (prev, curr) => parseInt(prev) + parseInt(curr) ) / array.length
  //   return Math.round(arr)
  // }

  // function heatGrid() {

  //   $('#graph1 .graphContainer').highcharts({

  //     chart: {
  //         type: 'heatmap',
  //         marginTop: 40,
  //         marginBottom: 80,
  //         plotBorderWidth: 1
  //     },

  //     title: {
  //         text: 'Day-Hour Occupancy Grid'
  //     },

  //     xAxis: {
  //       // Corresponding indices on heatmap:
  //       // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  //         categories: ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm']
  //     },

  //     yAxis: {
  //       // Corresponding indices on heatmap:
  //       // [0, 1, 2, 3, 4, 5, 6]
  //         categories: ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
  //         title: null
  //     },

  //     colorAxis: {
  //         min: 0,
  //         minColor: '#FFFFFF',
  //         maxColor: Highcharts.getOptions().colors[0]
  //     },

  //     legend: {
  //         align: 'right',
  //         layout: 'vertical',
  //         margin: 0,
  //         verticalAlign: 'top',
  //         y: 25,
  //         symbolHeight: 280
  //     },

  //     tooltip: {
  //         formatter: function () {
  //             return '<b>' + this.series.yAxis.categories[this.point.y] + '</b>' + ' at ' + '<b>' + this.series.xAxis.categories[this.point.x] + '</b><br>'
  //               + '<b>' + this.point.value + '</b>' + ' average occupants';
  //         }
  //     },

  //     series: [{
  //         name: 'Number of Occupants',
  //         borderWidth: 1,
  //         data: [
  //         // 8am
  //           [0,0,avg(totals["total00"])],[0,1,avg(totals["total01"])],[0,2,avg(totals["total02"])],[0,3,avg(totals["total03"])],[0,4,avg(totals["total04"])],[0,5,avg(totals["total05"])],[0,6,avg(totals["total06"])],
  //         // 9am
  //           [1,0,avg(totals["total10"])],[1,1,avg(totals["total11"])],[1,2,avg(totals["total12"])],[1,3,avg(totals["total13"])],[1,4,avg(totals["total14"])],[1,5,avg(totals["total15"])],[1,6,avg(totals["total16"])],
  //         // 10am
  //           [2,0,avg(totals["total20"])],[2,1,avg(totals["total21"])],[2,2,avg(totals["total22"])],[2,3,avg(totals["total23"])],[2,4,avg(totals["total24"])],[2,5,avg(totals["total25"])],[2,6,avg(totals["total26"])],
  //         // 11am
  //           [3,0,avg(totals["total30"])],[3,1,avg(totals["total31"])],[3,2,avg(totals["total32"])],[3,3,avg(totals["total33"])],[3,4,avg(totals["total34"])],[3,5,avg(totals["total35"])],[3,6,avg(totals["total36"])],
  //         // 12pm
  //           [4,0,avg(totals["total40"])],[4,1,avg(totals["total41"])],[4,2,avg(totals["total42"])],[4,3,avg(totals["total43"])],[4,4,avg(totals["total44"])],[4,5,avg(totals["total45"])],[4,6,avg(totals["total46"])],
  //         // 1pm
  //           [5,0,avg(totals["total50"])],[5,1,avg(totals["total51"])],[5,2,avg(totals["total52"])],[5,3,avg(totals["total53"])],[5,4,avg(totals["total54"])],[5,5,avg(totals["total55"])],[5,6,avg(totals["total56"])],
  //         // 2pm
  //           [6,0,avg(totals["total60"])],[6,1,avg(totals["total61"])],[6,2,avg(totals["total62"])],[6,3,avg(totals["total63"])],[6,4,avg(totals["total64"])],[6,5,avg(totals["total65"])],[6,6,avg(totals["total66"])],
  //         // 3pm
  //           [7,0,avg(totals["total70"])],[7,1,avg(totals["total71"])],[7,2,avg(totals["total72"])],[7,3,avg(totals["total73"])],[7,4,avg(totals["total74"])],[7,5,avg(totals["total75"])],[7,6,avg(totals["total76"])],
  //         // 4pm
  //           [8,0,avg(totals["total80"])],[8,1,avg(totals["total81"])],[8,2,avg(totals["total82"])],[8,3,avg(totals["total83"])],[8,4,avg(totals["total84"])],[8,5,avg(totals["total85"])],[8,6,avg(totals["total86"])],
  //         // 5pm
  //           [9,0,avg(totals["total90"])],[9,1,avg(totals["total91"])],[9,2,avg(totals["total92"])],[9,3,avg(totals["total93"])],[9,4,avg(totals["total94"])],[9,5,avg(totals["total95"])],[9,6,avg(totals["total96"])],
  //         // 6pm
  //           [10,0,avg(totals["total100"])],[10,1,avg(totals["total101"])],[10,2,avg(totals["total102"])],[10,3,avg(totals["total103"])],[10,4,avg(totals["total104"])],[10,5,avg(totals["total105"])],[10,6,avg(totals["total106"])],
  //         // 7pm
  //           [11,0,avg(totals["total110"])],[11,1,avg(totals["total111"])],[11,2,avg(totals["total112"])],[11,3,avg(totals["total113"])],[11,4,avg(totals["total114"])],[11,5,avg(totals["total115"])],[11,6,avg(totals["total116"])],
  //         // 8pm
  //           [12,0,avg(totals["total120"])],[12,1,avg(totals["total121"])],[12,2,avg(totals["total122"])],[12,3,avg(totals["total123"])],[12,4,avg(totals["total124"])],[12,5,avg(totals["total125"])],[12,6,avg(totals["total126"])],
  //         // 9pm
  //           [13,0,avg(totals["total130"])],[13,1,avg(totals["total131"])],[13,2,avg(totals["total132"])],[13,3,avg(totals["total133"])],[13,4,avg(totals["total134"])],[13,5,avg(totals["total135"])],[13,6,avg(totals["total136"])]
  //           ],
  //         dataLabels: {
  //             enabled: true,
  //             color: '#000000'
  //         }
  //     }]
  //   });
  // }


function graph1(response) {
  /// MAIN 

  // Sets the name for the particular graph. This makes it easier to reuse the code.
  graph1 = new graph("graph1", response);

  graph1.firstGraphLoad();

  // Sets the events for the building choice and room choice
  $("#" + graph1.name + " .building_choice" ).change(function() {
    graph1.setBuilding($(this).val());
  });

  
  $("#" + graph1.name + " .room_choice" ).change(function() {   
    console.log("ON CHANGE FIRED");
    graph1.reloadGraph();
  });

}






