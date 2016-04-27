
var graph = function (name, response) {

  // Assigning "this" as a variable for use inside the setBuilding $.get request. 
  var _self = this;

  this.name = name;
  this.response = response;
  this.series = {};

  this.totals = {}; // USED ONLY BY GRAPH 1 HEAT GRID
  this.weekdays = {}; // USED ONLY BY GRAPH 1 DAY BAR
  this.times = {}; // USED ONLY BY GRAPH 1 TIME BAR
  // 
  this.room_select = $("#" + this.name + " .room_choice");
  this.dayofweek = $("#" + this.name + " .dayofweek");

  var start_date_select = $("#" + this.name + " .start_date" ).datepicker();
  var end_date_select = $("#" + this.name + " .end_date").datepicker();

  this.firstGraphLoad = function () {
    switch(this.name) {
    case "graph1":
      this.setBuilding(1);
      break;
    case "graph2":
      this.setBuilding(1);
      // this.reloadGraph();
      break;
    case "graph5":
      this.setBuilding(1);
      this.reloadGraph();
      break;
    }
  }

  // TODO: Add new spectif functions for graphs here
  this.reloadGraph = function () {
    console.debug("reloadGraph" + this.name);
    switch(this.name) {
      case "graph1":
        this.separateByDayTimeGraph1(this.response);
        this.separateByWeekdayGraph1(this.response);
        this.separateByTimeGraph1(this.response);
        this.heatGridGraph1();
        this.initializeGraph1BarDay();
        this.initializeGraph1BarTime();
        break;
    case "graph2":
      this.dataToArrayGraph2(this.response);
      this.roomCourseOverlayGraph2(this.response);
      break;
    case "graph5":
      this.dataToArrayGraph5(this.response);
      break;
    } 
  }

  this.setBuilding = function (building_id) {
    // on change 
    // data attribute building.id
    $.get( "/charts/rooms.json?id="+building_id, function( data ) {
      // Obtain rooms depending on which building is selected.
      var which_rooms = "";
      data.forEach(function (room) {
        which_rooms += "<option value='" + room.id+ "'>"+ room.room +"</option>";
      });
      $("#" + _self.name + " .room_choice").html(which_rooms);
      start_date_select.val("04/01/2016");
      end_date_select.val("04/15/2016");
      _self.reloadGraph();
    });
  }

  // See the following: http://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript
  // function toTimeZone(time, zone) {
  //   var format = 'YYYY/MM/DD HH:mm:ss ZZ';
  //   return moment(time, format).tz(zone).format(format);
  // }

////////// For Graph 1 Tab Heat Grid 

  this.separateByDayTimeGraph1 = function (response) {
    for (var i = 0; i < this.response.length; i++) {
      if (this.response[i].r == this.room_select.val()) {
        var day = new Date(this.response[i].s);
        day = new Date(day.getTime() + day.getTimezoneOffset() * 60 *1000)
        var start = new Date(start_date_select.val());
        var end = new Date(end_date_select.val());
        if (day >= start && day <= end) {
          var time = day.getHours() - 8;
          var weekday = 6 - day.getDay();
          var key = "total"+time+weekday;
          if (this.totals[key] == null) {
            this.totals[key] = [this.response[i].n];
          } else {
            this.totals[key].push(this.response[i].n);
          }
        }
      }
    }
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
          text: 'Day-Hour Average Occupancy Grid'
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
          name: 'Average Number of Occupants',
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

  ///////////// For Graph 1 Tab Day Bar Graph

  this.separateByWeekdayGraph1 = function (response) {
    for (var i = 0; i < this.response.length; i++) {
      if (this.response[i].r == this.room_select.val()) {//&& (this.response[i].s > this.start_date_select.datepicker()) && (this.response[i].s < this.end_date_select.datepicker())) {
        var day = new Date(this.response[i].s);
        day = new Date(day.getTime() + day.getTimezoneOffset() * 60 *1000);
        var start = new Date(start_date_select.val());
        var end = new Date(end_date_select.val());
        if (day >= start && day <= end) {
          var weekday = 6 - day.getDay();
          var key = "total"+weekday;
          if (this.weekdays[key] == null) {
            this.weekdays[key] = [this.response[i].n];
          } else {
            this.weekdays[key].push(this.response[i].n);
          }
        }
      }
    }
  }

  this.initializeGraph1BarDay = function () {
    this.graph1BarDay = new Highcharts.Chart({
      chart: {
        renderTo: 'graph1BarDay',
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
        }
      },
      title: {
        text: 'Average Number of Occupants by Day'
      },
      plotOptions: {
        column: {
          depth: 25
        }
      },
      xAxis: {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      },
      series: [{
        name: 'Average Occupants',
        borderWidth: 1,
        data: [
          this.avg(this.weekdays["total0"]),
          this.avg(this.weekdays["total1"]),
          this.avg(this.weekdays["total2"]),
          this.avg(this.weekdays["total3"]),
          this.avg(this.weekdays["total4"]),
          this.avg(this.weekdays["total5"]),
          this.avg(this.weekdays["total6"])
        ]
      }]
    });
  }
  
  this.showValuesDaySlider = function () {
    $('#alpha-value').html(this.graph1BarDay.options.chart.options3d.alpha);
    $('#beta-value').html(this.graph1BarDay.options.chart.options3d.beta);
    $('#depth-value').html(this.graph1BarDay.options.chart.options3d.depth);
  }

  ////////////////// For Graph 1 Tab Time Bar Graph

  this.separateByTimeGraph1 = function (response) {

    for (var i = 0; i < this.response.length; i++) {
      if (this.response[i].r == this.room_select.val()) {//&& (this.response[i].s > this.start_date_select.datepicker()) && (this.response[i].s < this.end_date_select.datepicker())) {
        var day = new Date(this.response[i].s);
        day = new Date(day.getTime() + day.getTimezoneOffset() * 60 *1000);
        var start = new Date(start_date_select.val());
        var end = new Date(end_date_select.val());
        if (day >= start && day <= end) {
          var time = day.getHours() - 8;
          var key = "total"+time;
          if (this.times[key] == null) {
            this.times[key] = [this.response[i].n];
          } else {
            this.times[key].push(this.response[i].n);
          }
        }
      }
    }
  }

  /////////////////////////////////////////////////////  Start of Graph 2 //////////////////////

  this.dataToArrayGraph2 =  function (response) {
    if (!this.response) return;

    function time_of_day() {
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
    
    var x_axis = [];
    var y_axis = [];
    for (var i = 0; i < this.response.length; i++) {
      var date = new Date(this.response[i].s);
      // Keeps the time as PST. Otherwise, the "new Date function converts the time to UTC"
      date = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
      var day = 6 - date.getDay();
      // pick out only those with room_id r == rmID (rmID is room_select.val())
      if (this.response[i].r == this.room_select.val() && day == this.dayofweek.val()) {
        // push their sample_time s and number_occupants n into x and y arrays
        x_axis.push(this.response[i].s);
        y_axis.push(parseInt(this.response[i].n));
      }
    }

    /* The following "time_sets takes averages for each 5-minute time period for the room selected."
    input 
      [{ sampletime: "2016-04-05T08:00:00", number_people: 10 },
      { sampletime: "2016-04-05T08:05:00", number_people: 10 },
      { sampletime: "2016-04-12T08:00:00", number_people: 5 },
      { sampletime: "2016-04-12T08:05:00", number_people: 10 }]

    output
     [{ sampletime: 08:00:00, number_people: 7.5},
     { sampletime: 08:00:00, number_people: 10}]
      
    */

    var rmID = this.room_select.val()
    var times_series = time_of_day();

    var time_sets =
      response
      .filter(function(data){ return data.r == rmID})
      .filter(function(data) { 
        var sample_time = new Date(data.s);
        sample_time = new Date(sample_time.getTime() + sample_time.getTimezoneOffset() * 60 * 1000);
        return this.dayofweek.val() == sample_time.getDay() }.bind(this))
      .reduce(function(memo, data){
        var sample_time = new Date(data.s);
        var number_occupants = parseInt(data.n);
        // var weekday = sample_time.getDay();
        var hour = sample_time.getHours();
        var minute = sample_time.getMinutes();
        var time = hour + ":" + minute;

        if (!memo[time])
        {
          memo[time] = [number_occupants];
        } else {
          memo[time].push(number_occupants);
        }

        return memo
      },{})

      var averages = [];
      for(key in time_sets) {
        var sum = time_sets[key].reduce(function(acc,num) {return parseInt(acc) + parseInt(num)},0);
        averages.push(sum / time_sets[key].length);
      }


    this.series = {
      // all sample_times s for room_id r=rmID (rmID is room_select.val())
      x_axis: times_series,
      // all number_occupants s for room_id r=rmID (rmID is room_select.val())
      y_axis: averages
    };
    return this.series;
  }


  // this.dataToChartGraph2 = function () {

  //   $("#" + this.name + " #graphContainer").highcharts({      
  //     title: {
  //       text: 'Occupancy over Time',
  //       x: -20 //center
  //     },
  //     xAxis: {
  //       type: 'datetime',
  //       categories: this.series.x_axis.map(function(time){ return moment(time).format("MMM D[,] H:mm")}),
  //       tickInterval: 35
  //     },
  //     yAxis: {
  //       title: {
  //         text: 'Number of Occupants'
  //       },
  //       plotLines: [{
  //         value: 0,
  //         width: 1,
  //         color: '#1F99D3'
  //       }]
  //     },
  //     tooltip: {
  //       valueSuffix: ''
  //     },
  //     legend: {
  //       layout: 'vertical',
  //       align: 'left',
  //       verticalAlign: 'top',
  //       floating: true,
  //       borderWidth: 0
  //     },
  //     series: [{
  //       name: 'Occupants',
  //       data: this.series.y_axis,
  //       tooltip: {
  //         valueDecimals: 2
  //       }
  //     }]
  //   });
  // }

  this.roomCourseOverlayGraph2 = function () {

    var total = 100;
    $('#graph2 .graphContainer').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Occupant and Course Overlay'
        },
        subtitle: {
            text: 'Henn Room 251 on Mondy, April 18th, 2016'
        },
        xAxis: [{
            categories: this.series.x_axis,
            // categories: ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm'],
            // categories: this.series.x_axis.map(function(time){ return moment(time).format("MMM D[,] H:mm")}),
            // categories: this.series.x_axis.map(function(time){ return moment(time).format("MMM D[,] H:mm")}),
            // categories: this.series.x_axis.map(function(time){ return moment(time).tz(time, "MMM D[,] H:mm", "America/Los_Angeles")}),
            // categories: this.series.x_axis.map(function toTimeZone(time, "America/Los_Angeles"){ return moment(time).format("MMM D[,] H:mm")}),
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: 'Number of Occupants',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true
            // chart.yAxis[0].setExtremes(0,100);

        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: '% Occupied',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }

        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Courses',
            type: 'spline',
            yAxis: 1,
            data: [Math.round(7/total*100), Math.round(71/total*100), Math.round(54/total*100)],
            tooltip: {
                valueSuffix: ''//can place something here to add to each value on the axis
            }

        }, {
            name: 'Number of Occupants',
            type: 'spline',
            data: this.series.y_axis,
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ''//can place something here to add to each value on the axis
            }
        },  {
            name: 'Max Occupancy',
            type: 'spline',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ''//can place something here to add to each value on the axis
            }

        }
        ]
    });
  };

  //////////////////////////////////////////////////// End of Graph 2 ///////////////////

  this.dataToArrayGraph5 =  function (response) {
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
    this.dataToChartGraph5();
  }


  this.dataToChartGraph5 = function () {

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

  this.initializeGraph1BarTime = function () {
    this.graph1BarTime = new Highcharts.Chart({
      chart: {
        renderTo: 'graph1BarTime',
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
        }
      },
      title: {
        text: 'Average Number of Occupants by Time'
      },
      plotOptions: {
        column: {
          depth: 25
        }
      },
      xAxis: {
        categories: ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm']
      },
      series: [{
        name: 'Average Occupants',
        borderWidth: 1,
        data: [
          this.avg(this.times["total0"]),
          this.avg(this.times["total1"]),
          this.avg(this.times["total2"]),
          this.avg(this.times["total3"]),
          this.avg(this.times["total4"]),
          this.avg(this.times["total5"]),
          this.avg(this.times["total6"]),
          this.avg(this.times["total7"]),
          this.avg(this.times["total8"]),
          this.avg(this.times["total9"]),
          this.avg(this.times["total10"]),
          this.avg(this.times["total11"]),
          this.avg(this.times["total12"]),
          this.avg(this.times["total13"])
        ]
      }]
    });
  }


}