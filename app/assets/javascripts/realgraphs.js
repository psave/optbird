$(document).ready(function() {

  // variable to store the ajax response
  var info_to_graph;

  // when document is ready, load graph, and set info_to_graph equal to ajax response
  $.ajax({
    method: 'GET',
    url: '/realgraphs/show',
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


  $(".building_choice").change(function(){
    building = $(".building_choice").val();

    if (building == 1){
      if ($('.room_choice_container')){
        $('.room_choice_container').remove();
      };

      $(".graph_controls").append(
        "<div class='room_choice_container'>" +
        "<label class='label'>Room</label>" +
        "<p class='control'>" +
        "<span class='select'>" +
        "<select class='room_choice'>" +
        "<option value='1'>0403</option>" +
        "</select></span></p></div>"
      )
      // $(".room_choice").change(function(){
        rmID = $(".room_choice").val();
        dataToArray(info_to_graph);
      // })
    } else if(building == 2){
      if ($('.room_choice_container')){
        $('.room_choice_container').remove();
      };
      $(".graph_controls").append(
        "<div class='room_choice_container'>" +
        "<label class='label'>Room</label>" +
        "<p class='control'>" +
        "<span class='select'>" +
        "<select class='room_choice'>" +
        "<option value='1'>0202</option>" +
        "<option value='2'>0203</option>" +
        "</select></span></p></div>"
      )

      rmID = $(".room_choice").val();
      dataToArray(info_to_graph);

      $(".room_choice").change(function(){
        rmID = $(".room_choice").val();
        dataToArray(info_to_graph);
      })
    } else if(building == 3){
      if ($('.room_choice_container')){
        $('.room_choice_container').remove();
      };
      $(".graph_controls").append(
        "<div class='room_choice_container'>" +
        "<label class='label'>Room</label>" +
        "<p class='control'>" +
        "<span class='select'>" +
        "<select class='room_choice'>" +
        "<option value='1'>0101</option>" +
        "<option value='2'>0182</option>" +
        "</select></span></p></div>"
      )

      rmID = $(".room_choice").val();
      dataToArray(info_to_graph);

      $(".room_choice").change(function(){
        rmID = $(".room_choice").val();
        dataToArray(info_to_graph);
      })
    }
  })


  $(".graph_controls").append(
    "<div class='room_choice_container'>" +
    "<label class='label'>Room</label>" +
    "<p class='control'>" +
    "<span class='select'>" +
    "<select class='room_choice'>" +
    "<option value='1'>0403</option>" +
    "</select></span></p></div"
  )
  // $(".room_choice").change(function(){
    rmID = $(".room_choice").val();
    dataToArray(info_to_graph);
  // })

  // whenever room_choice changes, set rmID to room_choice and
  // call dataToArray again (i.e. reload graph)
 

  // response contains all data in multi_room_500_rows.csv
  // filter it here before passing it to highcharts
  function dataToArray(response) {
    var x_axis = [];
    var y_axis = [];
    // loop through response
    for (var i = 0; i < response.length; i++) {
      // pick out only those with room_id == rmID
      if (response[i].room_id == rmID) {
        // push their sample_time and number_occupants into x and y arrays
        x_axis.push(response[i].sample_time);
        y_axis.push(response[i].number_occupants);
      }
    }

    series = {
      // all sample_times for room_id=rmID
      x_axis: x_axis,
      // all number_occupants for room_id=rmID
      y_axis: y_axis
    };

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
