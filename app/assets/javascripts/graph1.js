function graph1(response_occupancy, response_courses) {
  /// MAIN 

  // Sets the name for the particular graph. This makes it easier to reuse the code.
  graph1 = new graph("graph1", response_occupancy, response_courses);

  graph1.firstGraphLoad();

  // Sets the events for the building choice and room choice
  $("#" + graph1.name + " .building_choice" ).change(function() {
    graph1.setBuilding($(this).val());
  });
  
  $("#" + graph1.name + " .room_choice" ).change(function() {   
    graph1.reloadGraph();
  });

  $('#sliders input').on('input change', function () {
    if ($("#" + graph1.name + " .num_percent_choice").val() == "Number") {
      graph1.graph1BarDay.options.chart.options3d[this.id] = this.value;
      graph1.graph1BarDay.redraw(false);
      graph1.graph1BarTime.options.chart.options3d[this.id] = this.value;
      graph1.graph1BarTime.redraw(false);
    } else {
      // graph1.showValuesDaySlider();
      graph1.graph1BarDayPercent.options.chart.options3d[this.id] = this.value;
      graph1.graph1BarDayPercent.redraw(false);
      graph1.graph1BarTimePercent.options.chart.options3d[this.id] = this.value;
      graph1.graph1BarTimePercent.redraw(false);
      // graph1.showValuesDaySliderPercent();
    }
    
    
  });

  $("#" + graph1.name + " .start_date" ).datepicker({minDate: new Date("04/06/2016"), maxDate: new Date("04/18/2016")});
  $("#" + graph1.name + " .end_date" ).datepicker({minDate: new Date("04/06/2016"), maxDate: new Date("04/18/2016")});

  $("#" + graph1.name + " .start_date" ).change(function () {
    graph1.reloadGraph();
  });

  $("#" + graph1.name + " .end_date" ).change(function () {
    graph1.reloadGraph();
  });

  $('#' + graph1.name + ' .num_percent_choice').change(function () {
    graph1.reloadGraph();
  });

}
