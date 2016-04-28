// // /////////     This is the JS file for the graph currently on the "graph2" tab.
function time_of_day(argument) {
  var time_of_day = [];
  for (var hour = 0; hour < 24; hour++){
    for (var minute = 0; minute < 60; minute += 5 ){
      var minuteString = String(minute);
      if (minuteString.length == 1) {
        minuteString = '0' + minuteString;
      }
      time_of_day.push(String(hour) + ":" + minuteString);
    }
  }
  return time_of_day
}

function graph2(response_occupancy, response_courses) {

  ///  MAIN ///

  // Sets the name for the particular graph. This makes it easier to reuse the code.
  // It sets the data set for the graph
  graph2 = new graph("graph2", response_occupancy, response_courses);

  graph2.firstGraphLoad();

  // Sets the events for the building choice and room choice
  $("#" + graph2.name + " .building_choice" ).change(function() {
    graph2.setBuilding($(this).val());
    // graph2.reloadGraph();
  });

  
  $("#" + graph2.name + " .room_choice" ).change(function() {
    graph2.reloadGraph();
  });

  $("#" + graph2.name + " .dayofweek" ).change(function() {
    graph2.reloadGraph();
  });

  $("#" + graph2.name + " .start_date" ).change(function () {
    graph2.reloadGraph();
  });

  $("#" + graph2.name + " .end_date" ).change(function () {
    graph2.reloadGraph();
  });

}





