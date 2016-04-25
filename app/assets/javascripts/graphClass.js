
var graph = function (name, response) {

  // Assigning "this" as a variable for use inside the setBuilding $.get request. 
  var _self = this;

  this.name = name;
  this.response = response;
  this.series = {};
  // 
  this.room_select = $("#" + this.name + " .room_choice");


  this.firstGraphLoad = function () {
    this.setBuilding(1);
    this.reloadGraph();
  }

  // TODO: Add new spectif functions for graphs here
  this.reloadGraph = function () {
    switch(this.name) {
    case "graph2":
      this.dataToArrayGraph2(this.response);
      break;
    }
    
  }

  this.setBuilding = function (building_id){
    // on change 
    // data attribute building.id
    $.get( "/charts/rooms.json?id="+building_id, function( data ) {
      // Obtain rooms depending on which building is selected.
      var which_rooms = "";
      data.forEach(function (room) {
        which_rooms += "<option value='" + room.id+ "'>"+ room.room +"</option>";
      });

      $("#" + _self.name + " .room_choice").html(which_rooms);

      _self.reloadGraph();
      
    });

  }

  this.dataToArrayGraph2 =  function (response) {
    if (!this.response) return;
    
    var x_axis = [];
    var y_axis = [];
    for (var i = 0; i < this.response.length; i++) {
      // pick out only those with room_id r == rmID (rmID is room_select.val())
      if (this.response[i].r == this.room_select.val()) {
        // push their sample_time s and number_occupants n into x and y arrays
        x_axis.push(this.response[i].s);
        y_axis.push(parseInt(this.response[i].n));
      }
    }

    this.series = {
      // all sample_times s for room_id r=rmID (rmID is room_select.val())
      x_axis: x_axis,
      // all number_occupants s for room_id r=rmID (rmID is room_select.val())
      y_axis: y_axis
    };
    // return series;
    this.dataToChartGraph2();
  }

  this.dataToChartGraph2 = function () {

    $("#" + this.name + " #graphContainer").highcharts({      
      title: {
        text: 'Occupancy over Time',
        x: -20 //center
      },
      xAxis: {
        type: 'datetime',
        categories: this.series.x_axis.map(function(time){ return moment(time).format("MMM D[,] H:mm")}),
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
        data: this.series.y_axis,
        tooltip: {
          valueDecimals: 2
        }
      }]
    });
  }
}