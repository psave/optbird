/////////     This is the JS file for the graph currently on the "graph2" tab.

//////  TODO / WARNING :  Every select (like in a $('xyz') call) in this file should have '#graph2'
//////                        added to the front, like $('#graph2 xyz')

function graph2(response) {
// function graph2(response) $("#graph2").change(function() {
//   var id = $(this).children(":selected").attr("id");
//   }); {

  // variable to store the ajax response
  var info_to_graph;

  // when document is ready, load graph, and set info_to_graph equal to ajax response

  var series = {};

  // make it so options can be set from menus
  var building = $("#graph2 .building_choice").val();
  var rmID = $("#graph2 .room_choice").val();

  // loads graph for room in the room dropdown
  // pass "true" to reloadGraph if you want it to wait for a choice from a dropdown
  // pass "false" if you want it to load without waiting
  function reloadGraph(wait_for_event){
    if (wait_for_event)
    $("#graph2 .room_choice").change(function(){
      rmID = $("#graph2 .room_choice").val();
      dataToArray(info_to_graph);
    })
    else{
      rmID = $("#graph2 .room_choice").val();
      dataToArray(info_to_graph);
    }
  }

  // puts the given building's rooms in the room dropdown
  function setBuilding(building){

    // on change 
    // data attribute building.id
    $.get( "/charts/rooms.json?id=2", function( data ) {
    // $.get( "/charts/rooms.json?id=" + room.building_id, function( data ) {
      var which_rooms = "";
      data.forEach(function (room) {
        console.log(room.id);
        which_rooms += "<option value='" + room.id+ "'>"+ room.room +"</option>";
        
      });
      $("#graph2 .graph_controls").append(
        "<div class='room_choice_container'>" +
        "<label id='graph2' class='label'>Room</label>" +
        "<p id='graph2' class='control'>" +
        "<span id='graph2' class='select'>" +
        "<select id='graph2' class='room_choice'>" +
        which_rooms +
        "</select></span></p></div>"
      );
    });





  //   // WO
  //   var building1rooms = "<option value='1'>343</option>";
  //   var building2rooms = "<option value='1'>1202</option><option value='2'>1204</option>";
  //   var building3rooms = "<option value='1'>101</option><option value='2'>110</option>";
  //   var which_rooms;
  //   console.log(building)
  //   var which_rooms;
  //   if (building == 1){
  //     which_rooms = building1rooms;
  //   }
  //   else if (building == 2){
  //     which_rooms = building2rooms;
  //   }
  //   else if (building == 3){
  //     which_rooms = building3rooms;
  //   }

  //   if ($('#graph2 .room_choice_container')){
  //       $('#graph2 .room_choice_container').remove();
  //     };

  //     // Make the below an Ajax call
  //     $("#graph2 .graph_controls").append(
  //       "<div class='room_choice_container'>" +
  //       "<label id='graph2' class='label'>Room</label>" +
  //       "<p id='graph2' class='control'>" +
  //       "<span id='graph2' class='select'>" +
  //       "<select id='graph2' class='room_choice'>" +
  //       which_rooms +
  //       "</select></span></p></div>"
  //     )
  }

  $('#graph2 #building_choice').on('change', function(e){
    setBuilding($('#graph2 #building_choice').val());
  });
  // sets building based on change in building dropdown
  // and reloads graph
  // $("#graph2 .building_choice").change(function(){
  //   building = $("#graph2 .building_choice").val();
  //   if (building == building.id){
  //     setBuilding(building.id);
  //     reloadGraph(false);
  //   } else if(building == 2){
  //     setBuilding(2);
  //     reloadGraph(false);
  //   } else if(building == 3){
  //     setBuilding(3);
  //     reloadGraph(false);
  //   }
  //   reloadGraph(true);
  // })

  // when document ready, loads graph of first room in first building
  // so the page doesn't load with an empty graph
  setBuilding(1);
  reloadGraph(false);
 

  // response contains all data in multi_room_500_rows.csv
  // filter it here before passing it to highcharts
  function dataToArray(response) {
    if (!response) return;
    var x_axis = [];
    var y_axis = [];
    for (var i = 0; i < response.length; i++) {
      // pick out only those with room_id r == rmID
      if (response[i].r == rmID) {
        // push their sample_time s and number_occupants n into x and y arrays
        x_axis.push(response[i].s);
        y_axis.push(parseInt(response[i].n));
      }
    }

    series = {
      // all sample_times s for room_id r=rmID
      x_axis: x_axis,
      // all number_occupants s for room_id r=rmID
      y_axis: y_axis
    };
    // return series;
    dataToChart();
  }

  function dataToChart() {
    console.log("inside dataToChart");
    $('#graph2 #graphContainer').highcharts({      
      title: {
        text: 'Occupancy over Time',
        x: -20 //center
      },
      xAxis: {
        type: 'datetime',
        categories: series.x_axis.map(function(time){ return moment(time).format("MMM D[,] H:mm")}),
        tickInterval: 35
      },
      yAxis: {
        title: {
          text: 'Number of Occupants'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#1F99D3'
        }]
      },
      tooltip: {
        valueSuffix: ''
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        floating: true,
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

};