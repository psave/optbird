
var graph = function (name, response) {

  // Assigning "this" as a variable for use inside the setBuilding $.get request. 
  var _self = this;

  this.name = name;
  this.response = response;
  this.series = {};

  this.totals = {}; // USED ONLY BY GRAPH 1
  // 
  this.room_select = $("#" + this.name + " .room_choice");


  this.firstGraphLoad = function () {
    
    switch(this.name) {
    case "graph1":
      this.setBuilding(1);
      break;
    case "graph2":
      this.setBuilding(1);
      this.reloadGraph();
      break;
    }

  }

  // TODO: Add new spectif functions for graphs here
  this.reloadGraph = function () {
    switch(this.name) {
    case "graph1":
      this.separateByWeekdayGraph1();
      this.heatGridGraph1();
      break;
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


  this.avg = function(array) {
    var arr = array.reduce( (prev, curr) => parseInt(prev) + parseInt(curr) ) / array.length
    return Math.round(arr)
  }


  this.heatGridGraph1 = function() {

    $('#graph1 .graphContainer').highcharts({

      chart: {
          type: 'heatmap',
          marginTop: 40,
          marginBottom: 80,
          plotBorderWidth: 1
      },

      title: {
          text: 'Day-Hour Occupancy Grid'
      },

      xAxis: {
        // Corresponding indices on heatmap:
        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
          categories: ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm']
      },

      yAxis: {
        // Corresponding indices on heatmap:
        // [0, 1, 2, 3, 4, 5, 6]
          categories: ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
          title: null
      },

      colorAxis: {
          min: 0,
          minColor: '#FFFFFF',
          maxColor: Highcharts.getOptions().colors[0]
      },

      legend: {
          align: 'right',
          layout: 'vertical',
          margin: 0,
          verticalAlign: 'top',
          y: 25,
          symbolHeight: 280
      },

      tooltip: {
          formatter: function () {
              return '<b>' + this.series.yAxis.categories[this.point.y] + '</b>' + ' at ' + '<b>' + this.series.xAxis.categories[this.point.x] + '</b><br>'
                + '<b>' + this.point.value + '</b>' + ' occupants on average';
          }
      },

      series: [{
          name: 'Number of Occupants',
          borderWidth: 1,
          data: [
          // 8am
            [0,0,this.avg(this.totals["total00"])],[0,1,this.avg(this.totals["total01"])],[0,2,this.avg(this.totals["total02"])],[0,3,this.avg(this.totals["total03"])],[0,4,this.avg(this.totals["total04"])],[0,5,this.avg(this.totals["total05"])],[0,6,this.avg(this.totals["total06"])],
          // 9am
            [1,0,this.avg(this.totals["total10"])],[1,1,this.avg(this.totals["total11"])],[1,2,this.avg(this.totals["total12"])],[1,3,this.avg(this.totals["total13"])],[1,4,this.avg(this.totals["total14"])],[1,5,this.avg(this.totals["total15"])],[1,6,this.avg(this.totals["total16"])],
          // 10am
            [2,0,this.avg(this.totals["total20"])],[2,1,this.avg(this.totals["total21"])],[2,2,this.avg(this.totals["total22"])],[2,3,this.avg(this.totals["total23"])],[2,4,this.avg(this.totals["total24"])],[2,5,this.avg(this.totals["total25"])],[2,6,this.avg(this.totals["total26"])],
          // 11am
            [3,0,this.avg(this.totals["total30"])],[3,1,this.avg(this.totals["total31"])],[3,2,this.avg(this.totals["total32"])],[3,3,this.avg(this.totals["total33"])],[3,4,this.avg(this.totals["total34"])],[3,5,this.avg(this.totals["total35"])],[3,6,this.avg(this.totals["total36"])],
          // 12pm
            [4,0,this.avg(this.totals["total40"])],[4,1,this.avg(this.totals["total41"])],[4,2,this.avg(this.totals["total42"])],[4,3,this.avg(this.totals["total43"])],[4,4,this.avg(this.totals["total44"])],[4,5,this.avg(this.totals["total45"])],[4,6,this.avg(this.totals["total46"])],
          // 1pm
            [5,0,this.avg(this.totals["total50"])],[5,1,this.avg(this.totals["total51"])],[5,2,this.avg(this.totals["total52"])],[5,3,this.avg(this.totals["total53"])],[5,4,this.avg(this.totals["total54"])],[5,5,this.avg(this.totals["total55"])],[5,6,this.avg(this.totals["total56"])],
          // 2pm
            [6,0,this.avg(this.totals["total60"])],[6,1,this.avg(this.totals["total61"])],[6,2,this.avg(this.totals["total62"])],[6,3,this.avg(this.totals["total63"])],[6,4,this.avg(this.totals["total64"])],[6,5,this.avg(this.totals["total65"])],[6,6,this.avg(this.totals["total66"])],
          // 3pm
            [7,0,this.avg(this.totals["total70"])],[7,1,this.avg(this.totals["total71"])],[7,2,this.avg(this.totals["total72"])],[7,3,this.avg(this.totals["total73"])],[7,4,this.avg(this.totals["total74"])],[7,5,this.avg(this.totals["total75"])],[7,6,this.avg(this.totals["total76"])],
          // 4pm
            [8,0,this.avg(this.totals["total80"])],[8,1,this.avg(this.totals["total81"])],[8,2,this.avg(this.totals["total82"])],[8,3,this.avg(this.totals["total83"])],[8,4,this.avg(this.totals["total84"])],[8,5,this.avg(this.totals["total85"])],[8,6,this.avg(this.totals["total86"])],
          // 5pm
            [9,0,this.avg(this.totals["total90"])],[9,1,this.avg(this.totals["total91"])],[9,2,this.avg(this.totals["total92"])],[9,3,this.avg(this.totals["total93"])],[9,4,this.avg(this.totals["total94"])],[9,5,this.avg(this.totals["total95"])],[9,6,this.avg(this.totals["total96"])],
          // 6pm
            [10,0,this.avg(this.totals["total100"])],[10,1,this.avg(this.totals["total101"])],[10,2,this.avg(this.totals["total102"])],[10,3,this.avg(this.totals["total103"])],[10,4,this.avg(this.totals["total104"])],[10,5,this.avg(this.totals["total105"])],[10,6,this.avg(this.totals["total106"])],
          // 7pm
            [11,0,this.avg(this.totals["total110"])],[11,1,this.avg(this.totals["total111"])],[11,2,this.avg(this.totals["total112"])],[11,3,this.avg(this.totals["total113"])],[11,4,this.avg(this.totals["total114"])],[11,5,this.avg(this.totals["total115"])],[11,6,this.avg(this.totals["total116"])],
          // 8pm
            [12,0,this.avg(this.totals["total120"])],[12,1,this.avg(this.totals["total121"])],[12,2,this.avg(this.totals["total122"])],[12,3,this.avg(this.totals["total123"])],[12,4,this.avg(this.totals["total124"])],[12,5,this.avg(this.totals["total125"])],[12,6,this.avg(this.totals["total126"])],
          // 9pm
            [13,0,this.avg(this.totals["total130"])],[13,1,this.avg(this.totals["total131"])],[13,2,this.avg(this.totals["total132"])],[13,3,this.avg(this.totals["total133"])],[13,4,this.avg(this.totals["total134"])],[13,5,this.avg(this.totals["total135"])],[13,6,this.avg(this.totals["total136"])]
            ],
          dataLabels: {
              enabled: true,
              color: '#000000'
          }
      }]
    });
  }



  this.separateByWeekdayGraph1 = function (response) {

    for (var i = 0; i < this.response.length; i++) {
      if (this.response[i].r == this.room_select.val()) {
        var day = new Date(this.response[i].s);
        var time = day.getHours() - 8;
        var day = 6 - day.getDay();
        var key = "total"+time+day;
        if (this.totals[key] == null) {
          this.totals[key] = [this.response[i].n];
        } else {
          this.totals[key].push(this.response[i].n);
        }
      }
    }
  }
}