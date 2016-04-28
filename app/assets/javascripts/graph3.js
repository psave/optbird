/////////     This is the JS file for the graph currently on the "graph3" tab.

//////  TODO / WARNING :  Every select (like in a $('xyz') call) in this file should have '#graph3'
//////                        added to the front, like $('#graph3 xyz')

function graph3(response_occupancy) {

  graph3 = new graph("graph3", response_occupancy);

  graph3.firstGraphLoad();

  $("#" + graph3.name + " .building_choice" ).change(function() {
    graph3.setBuilding($(this).val());
  });
  
  $("#" + graph3.name + " .room_choice" ).change(function() {
    graph3.reloadGraph();
  });

}
  // make it so options can be set from menus
  // var building = $("#graph3 .building_choice").val();
  // var rmID = $("#graph3 .room_choice").val();
  // var startDate = $("#graph3 #start_date").val();
  // var endDate = $("#graph3 #end_date").val();

  // overwriting start and end dates with hardcoded dates for the moment
  // startDate = new Date("2016-04-17T00:00:00");
  // endDate = new Date("2016-04-23T00:00:00");

  // loads graph for room in the room dropdown
  // pass "true" to reloadGraph if you want it to wait for a choice from a dropdown
  // pass "false" if you want it to load without waiting

  // function reloadGraph(wait_for_event){
  //   if (wait_for_event){
  //     $("#graph3 .room_choice").change(function(){
  //       rmID = $("#graph3 .room_choice").val();
  //       dataToArray(response, startDate, endDate);
  //     })
  //   }
  //   else{
  //     rmID = $("#graph3 .room_choice").val();
  //     dataToArray(response, startDate, endDate);
  //   }
  // }


  // puts the given building's rooms in the room dropdown
  // function setBuilding(building){
  //   var building1rooms = "<option value='1'>343</option>";
  //   var building2rooms = "<option value='1'>1202</option><option value='2'>1204</option>";
  //   var building3rooms = "<option value='1'>101</option><option value='2'>110</option>";
  //   var which_rooms;
  //   if (building == 1){
  //     which_rooms = building1rooms;
  //   }
  //   else if (building == 2){
  //     which_rooms = building2rooms;
  //   }
  //   else if (building == 3){
  //     which_rooms = building3rooms;
  //   }

  //   if ($('#graph3 .room_choice_container')){
  //       $('#graph3 .room_choice_container').remove();
  //     };


  //     $("#graph3 .graph_controls").append(
  //       "<div class='room_choice_container'>" +
  //       "<label class='label'>Room</label>" +
  //       "<p class='control'>" +
  //       "<span class='select'>" +
  //       "<select class='room_choice'>" +
  //       which_rooms +
  //       "</select></span></p></div>"
  //     )
  // }


  // sets building based on change in building dropdown
  // and reloads graph
  // $("#graph3 .building_choice").change(function(){
  //   building = $("#graph3 .building_choice").val();
  //   if (building == 1){
  //     setBuilding(1);
  //     reloadGraph(false);
  //   } else if (building == 2){
  //     setBuilding(2);
  //     reloadGraph(false);
  //   } else if (building == 3){
  //     setBuilding(3);
  //     reloadGraph(false);
  //   }
  //   reloadGraph(true);
  // })

  // when document ready, loads graph of first room in first building
  // so the page doesn't load with an empty graph
  // setBuilding(1);
  // startDate = new Date("2016-04-10T00:00:00");
  // endDate = new Date("2016-04-16T00:00:00");
  // reloadGraph(false);
 

  // response_occupancy contains the data from the query in realgraphs_controller
  // filter it here before passing it to highcharts

  // this.dataToArray = function (response) {

  //   if (!response) return;
  //   // a whole day in 5-minute increments
  //   var time_of_day = [];
  //   for (var hour = 0; hour < 24; hour++){
  //     var hourString = String(hour);
  //     for (var minute = 0; minute < 60; minute += 5 ){
  //       var minuteString = String(minute);
  //       if (minuteString.length == 1) {
  //         minuteString = '0' + minuteString;
  //       }
  //       time_of_day.push(hourString + ":" + minuteString);
  //     }
  //   }
  //   // console.log(time_of_day);


  //   // a series for each weekday
  //   var sunday = [];
  //   var monday = [];
  //   var tuesday = [];
  //   var wednesday = [];
  //   var thursday = [];
  //   var friday = [];
  //   var saturday = [];


  //   for (var i = 0; i < response.length; i++) {
  //     if (response[i].r == rmID) {

  //       var datapoint = [];
  //       var sample_time = response[i].s;
  //       var number_occupants = parseInt(response[i].n);
  //       var datapoint = [sample_time, number_occupants];
  //       var sample_time_as_Date_object = new Date(sample_time);
  //       var weekday = sample_time_as_Date_object.getDay();
  //       var hour = sample_time_as_Date_object.getHours();
  //       var minute = sample_time_as_Date_object.getMinutes();
  //       // if (minute < 10){
  //       //   minute = '0' + minute;
  //       // }
  //       var hourString = String(hour);
  //       var minuteString = String(minute);
  //       if (minuteString.length == 1) {
  //         minuteString = '0' + minuteString;
  //       }
  //       var time = hourString + ":" + minuteString;


  //       // calculating average occupancy for a given time of day

  //       var occ_tracker = {sum: 0, counter: 0}
  //       for (var t = 0; t < time_of_day.length; t++){
  //         if (time == time_of_day[t]){
  //           occ_tracker.sum += number_occupants;
  //           occ_tracker.counter++;
  //         }
  //       }
  //       var occ_avg
  //       if (occ_tracker.counter === 0){
  //         occ_avg = 0;
  //       } else {
  //         occ_avg = occ_tracker.sum / occ_tracker.counter;
  //       }
  //       var datapoint_avg = [time, occ_avg];

  //       if (startDate <= sample_time_as_Date_object && sample_time_as_Date_object <= endDate) {
        
  //         // console.log("startDate: " + startDate);
  //         // console.log("endDate: " + endDate);
  //         // console.log("sample_time_as_Date_object: " + sample_time_as_Date_object);

  //         // getDay() returns 0 for Sunday, 1 for Monday, 2 for Tuesday etc.
  //         if (weekday === 0) {
  //           sunday.push(datapoint_avg);
  //         }
  //         else if (weekday === 1){
  //           monday.push(datapoint_avg);
  //         }
  //         else if (weekday === 2){
  //           tuesday.push(datapoint_avg);
  //         }
  //         else if (weekday === 3){
  //           wednesday.push(datapoint_avg);
  //         }
  //         else if (weekday === 4){
  //           thursday.push(datapoint_avg);
  //         }
  //         else if (weekday === 5){
  //           friday.push(datapoint_avg);
  //         }
  //         else if (weekday === 6){
  //           saturday.push(datapoint_avg);
  //         }

  //       }
  //     }
  //   }

  //   dataToChart(time_of_day, sunday, monday, tuesday, wednesday, thursday, friday, saturday);
  // }

  // function dataToChart(time_of_day, sunday, monday, tuesday, wednesday, thursday, friday, saturday) {
    
  //   Highcharts.setOptions({
  //     chart: {
  //       style: {
  //         fontFamily: 'Helvetica'
  //       }
  //     }
  //   });


  //   $('#graph3 #graphContainer').highcharts({
  //     chart: {
  //       // borderColor: '#E7E7E7',
  //       // borderRadius: 3,
  //       // borderWidth: 1,
  //       type: 'line'
  //     },     
  //     title: {
  //       text: 'Average Occupancy Through The Day',
  //       x: -20 //center
  //     },
  //     xAxis: {
  //       title: {
  //         text: 'Time of Day'
  //       },
  //       type: 'datetime',
  //       categories: time_of_day
  //       // tickInterval: 2
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
  //       align: 'right',
  //       borderColor: '#E7E7E7',
  //       borderRadius: 3,
  //       borderWidth: 1,
  //       itemMarginTop: 5,
  //       itemMarginBottom: 5,
  //       itemStyle: {
  //         color: '#000000',
  //         fontSize: '14px',
  //         fontWeight: 'normal'
  //       },
  //       layout: 'vertical',
  //       verticalAlign: 'middle',
  //       y: -44
  //     },
  //     series: [{
  //       name: 'Sunday',
  //       data: sunday
  //     }, {
  //       name: 'Monday',
  //       data: monday
  //     }, {
  //       name: 'Tuesday',
  //       data: tuesday
  //     }, {
  //       name: 'Wednesday',
  //       data: wednesday
  //     }, {
  //       name: 'Thursday',
  //       data: thursday
  //     }, {
  //       name: 'Friday',
  //       data: friday
  //     }, {
  //       name: 'Saturday',
  //       data: saturday
  //     }]
  //     ,
  //     navigation: {
  //       buttonOptions: {
  //         verticalAlign: 'bottom'
  //       }
  //     }
  //   });
  // }

