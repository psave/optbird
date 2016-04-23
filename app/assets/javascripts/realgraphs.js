$(document).ready(function() {

  // variable to store the ajax response
  var info_to_graph;

  // when document is ready, load graph, and set info_to_graph equal to ajax response
  $.ajax({
    method: 'GET',
    url: '/realgraphs/all',
    dataType: 'json',
    contentType: 'application/json',
    success: function(response){
      dataToArray(response);
      info_to_graph = response;
    }
  });

  var series = {};

  // make it so options can be set from menus
  var building = $(".building_choice").val();
  var rmID = $(".room_choice").val();

  // loads graph for room in the room dropdown
  // pass "true" to reloadGraph if you want it to wait for a choice from a dropdown
  // pass "false" if you want it to load without waiting
  function reloadGraph(wait_for_event){
    if (wait_for_event)
    $(".room_choice").change(function(){
      rmID = $(".room_choice").val();
      dataToArray(info_to_graph);
    })
    else{
      rmID = $(".room_choice").val();
      dataToArray(info_to_graph);
    }
  }

  // puts the given building's rooms in the room dropdown
  function setBuilding(building){
    var building1rooms = "<option value='1'>343</option>";
    var building2rooms = "<option value='1'>1202</option><option value='2'>1204</option>";
    var building3rooms = "<option value='1'>101</option><option value='2'>110</option>";
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

    if ($('.room_choice_container')){
        $('.room_choice_container').remove();
      };

      $(".graph_controls").append(
        "<div class='room_choice_container'>" +
        "<label class='label'>Room</label>" +
        "<p class='control'>" +
        "<span class='select'>" +
        "<select class='room_choice'>" +
        which_rooms +
        "</select></span></p></div>"
      )
  }

  // sets building based on change in building dropdown
  // and reloads graph
  $(".building_choice").change(function(){
    building = $(".building_choice").val();
    if (building == 1){
      setBuilding(1);
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
    // console.log("inside dataToChart");
    $('#graphContainer').highcharts({      
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

});
