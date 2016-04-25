/////////     This is the JS file for the graph currently on the "graph1" tab.

//////  TODO / WARNING :  Every select (like in a $('xyz') call) in this file should have '#graph2'
//////                        added to the front, like $('#graph1 xyz')

 // Hardcoded data for getting started with bulma
 
function graph2b(response) {

  var series = {};

  // make it so options can be set from menus
  var building = $("#graph2 .building_choices").val();
  var rmID = $("#graph2 .room_choices").val();

  // loads graph for room in the room dropdown
  // pass "true" to reloadGraph if you want it to wait for a choice from a dropdown
  // pass "false" if you want it to load without waiting
  function reloadGraph(wait_for_event, $element){
    if (wait_for_event)
    $element.change(function(){
      rmID = $("#graph2 .room_choices").val();
      dataToArray(response);
    })
    else{
      rmID = $("#graph2 .room_choices").val();
      dataToArray(response);
    }
  }

  // puts the given building's rooms in the room dropdown
  function setBuilding(building){
   console.log(building)
    var which_rooms;
    if (building == 1){
      which_rooms = building1rooms;
    }
    else if (building == 2){
      which_rooms = building2rooms;
    }
    else if (building == 3){
      which_rooms = building3rooms;
    }

    if ($('#graph2 .room_choices_container')){
        $('#graph2 .room_choices_container').remove();
      };

      // Make the below an Ajax calls
      $("#graph2 .graph_controls").append(
        "<div class='room_choices_container'>" +
        "<label class='label'>Room</label>" +
        "<p class='control'>" +
        "<span class='select'>" +
        "<select class='room_choices'>" +
        building +
        "</select></span></p></div>"
      )
  }

  $('#graph2 #building_choices').on('change', function(e){
    setBuilding($('#graph2 #building_choices').val());
  });
  // sets building based on change in building dropdown
  // and reloads graph
  $(".building_choices").change(function(){
    building = $(".building_choices").val();
    if (building == building.id){
      setBuilding(building.id);
      reloadGraph(false);
    } else if(building == 2){
      setBuilding(2);
      reloadGraph(false);
    } else if(building == 3){
      setBuilding(3);
      reloadGraph(false);
    }
    reloadGraph(true);
  })

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

}
