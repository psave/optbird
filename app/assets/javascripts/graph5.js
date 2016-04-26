function graph5(response) {

  ///  MAIN ///

  // Sets the name for the particular graph. This makes it easier to reuse the code.
  graph5 = new graph("graph5", response);

  graph5.firstGraphLoad();

  // Sets the events for the building choice and room choice
  $("#" + graph5.name + " .building_choice" ).change(function() {
    graph5.setBuilding($(this).val());
  });

  
  $("#" + graph5.name + " .room_choice" ).change(function() {
    graph5.reloadGraph();
  });

}