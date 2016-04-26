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


