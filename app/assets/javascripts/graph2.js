// // /////////     This is the JS file for the graph currently on the "graph2" tab.

// // //////  TODO / WARNING :  Every select (like in a $('xyz') call) in this file should have '#graph2'
// // //////                        added to the front, like $('#graph2 xyz')

// function graph2(response) {

//   // when document is ready, load graph, and set info_to_graph equal to ajax response

//   var series = {};

//   // make it so options can be set from menus
//   // var building = $("#graph2 .building_choice").val();
//   var rmID = $("#graph2 .room_choice").val();

//   // loads graph for room in the room dropdown
//   // pass "true" to reloadGraph if you want it to wait for a choice from a dropdown
//   // pass "false" if you want it to load without waiting
//   function reloadGraph(){
//     rmID = $("#graph2 .room_choice").val();
//     dataToArray(response);
//   }

//   // puts the given building's rooms in the room dropdown
//   function setBuilding(building){
//     // on change 
//     // data attribute building.id
//     $.get( "/charts/rooms.json?id="+building, function( data ) {
//       // Obtain rooms depending on which building is selected.
//       var which_rooms = "";
//       data.forEach(function (room) {
//         which_rooms += "<option value='" + room.id+ "'>"+ room.room +"</option>";
//       });

//       $("#graph2 .room_choice").html(which_rooms);

//       reloadGraph();

//     });

//   }
 

//   // response contains all data in multi_room_500_rows.csv
//   // filter it here before passing it to highcharts
//   function dataToArray(response) {
//     if (!response) return;
//     var x_axis = [];
//     var y_axis = [];
//     console.log(rmID);
//     for (var i = 0; i < response.length; i++) {
//       // pick out only those with room_id r == rmID
//       if (response[i].r == rmID) {
//         // push their sample_time s and number_occupants n into x and y arrays
//         x_axis.push(response[i].s);
//         y_axis.push(parseInt(response[i].n));
//       }
//     }

//     series = {
//       // all sample_times s for room_id r=rmID
//       x_axis: x_axis,
//       // all number_occupants s for room_id r=rmID
//       y_axis: y_axis
//     };
//     // return series;
//     dataToChart();
//   }

//   function dataToChart() {
//     console.log("inside dataToChart");

//     $('#graph2 #graphContainer').highcharts({      
//       title: {
//         text: 'Occupancy over Time',
//         x: -20 //center
//       },
//       xAxis: {
//         type: 'datetime',
//         categories: series.x_axis.map(function(time){ return moment(time).format("MMM D[,] H:mm")}),
//         tickInterval: 35
//       },
//       yAxis: {
//         title: {
//           text: 'Number of Occupants'
//         },
//         plotLines: [{
//           value: 0,
//           width: 1,
//           color: '#1F99D3'
//         }]
//       },
//       tooltip: {
//         valueSuffix: ''
//       },
//       legend: {
//         layout: 'vertical',
//         align: 'left',
//         verticalAlign: 'top',
//         floating: true,
//         borderWidth: 0
//       },
//       series: [{
//         name: 'Occupants',
//         data: series.y_axis,
//         tooltip: {
//           valueDecimals: 2
//         }
//       }]
//     });
//   }



//   ////// Main ////
//   // when document ready, loads graph of first room in first building
//   // so the page doesn't load with an empty graph
//   setBuilding(1);
//   reloadGraph();

//   $("#graph2 .building_choice" ).change(function() {
//     setBuilding($(this).val());
//   });
//   $("#graph2 .room_choice" ).change(function() {
//     reloadGraph();
//   });

// };






function graph2(response) {

  ///  MAIN ///

  // Sets the name for the particular graph. This makes it easier to reuse the code.
  graph2 = new graph("graph2", response);

  graph2.firstGraphLoad();

  // Sets the events for the building choice and room choice
  $("#" + graph2.name + " .building_choice" ).change(function() {
    graph2.setBuilding($(this).val());
    // graph2.reloadGraph();
  });

  
  $("#" + graph2.name + " .room_choice" ).change(function() {
    graph2.reloadGraph();
  });

}



