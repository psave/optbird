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
    graph1.reloadGraph();
  });

  $('#sliders input').on('input change', function () {
    graph1.graph1BarDay.options.chart.options3d[this.id] = this.value;
    graph1.showValuesDaySlider();
    graph1.graph1BarDay.redraw(false);
    graph1.graph1BarTime.options.chart.options3d[this.id] = this.value;
    graph1.showValuesDaySlider();
    graph1.graph1BarTime.redraw(false);
  });


  $("#" + graph1.name + " .start_date" ).change(function () {
    graph1.reloadGraph();
  });

  $("#" + graph1.name + " .end_date" ).change(function () {
    graph1.reloadGraph();
  });

}
