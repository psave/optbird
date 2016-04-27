// // /////////     This is the JS file for the graph currently on the "graph2" tab.

function graph2(response) {

  ///  MAIN ///

  // Sets the name for the particular graph. This makes it easier to reuse the code.
  // It sets the data set for the graph
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

  $("#" + graph2.name + " .dayofweek" ).change(function() {
    graph2.reloadGraph();
  });

}





