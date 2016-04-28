function graph4(response_occupancy) {


  var num_percent_choice = $('.num_percent_choice4');
  var angu_occ_343 = [];
  var angu_occ_345 = [];
  var angu_occ_347 = [];
  var angu_occ_350 = [];
  var angu_occ_354 = [];
  var angu_occ_132 = [];
  var angu_occ_133 = [];
  var angu_occ_135 = [];
  var angu_occ_291 = [];
  var angu_occ_232 = [];
  var angu_occ_233 = [];
  var angu_occ_234 = [];
  var angu_occ_235 = [];
  var angu_occ_237 = [];
  var angu_occ_241 = [];
  var angu_occ_243 = [];
  var angu_occ_254 = [];
  var angu_occ_292 = [];
  var angu_occ_293 = [];
  var angu_occ_295 = [];
  var angu_occ_296 = [];
  var ceme_occ_1202 = [];
  var ceme_occ_1204 = [];
  var dmp_occ_101 = [];
  var dmp_occ_110 = [];
  var dmp_occ_201 = [];
  var dmp_occ_301 = [];
  var dmp_occ_310 = [];
  var henn_occ_200 = [];
  var henn_occ_201 = [];
  var henn_occ_202 = [];


function barChart() {
  for (var i = 0; i < response_occupancy.length; i++) {
    // var response_occupancy[i].r = rmId;
    switch (response_occupancy[i].r) {
      case "1": 
        angu_occ_343.push(response_occupancy[i].n);
        break;
      case "2": 
        angu_occ_345.push(response_occupancy[i].n);
        break;
      case "3": 
        angu_occ_347.push(response_occupancy[i].n);
        break;
      case "4": 
        angu_occ_350.push(response_occupancy[i].n);
        break;
      case "5": 
        angu_occ_354.push(response_occupancy[i].n);
        break;
      case "6": 
        angu_occ_132.push(response_occupancy[i].n);
        break;
      case "7": 
        angu_occ_133.push(response_occupancy[i].n);
        break;
      case "8": 
        angu_occ_135.push(response_occupancy[i].n);
        break;
      case "9": 
        angu_occ_291.push(response_occupancy[i].n);
        break;
      case "10": 
        angu_occ_232.push(response_occupancy[i].n);
        break;
      case "11": 
        angu_occ_233.push(response_occupancy[i].n);
        break;
      case "12": 
        angu_occ_234.push(response_occupancy[i].n);
        break;
      case "13": 
        angu_occ_235.push(response_occupancy[i].n);
        break;
      case "14": 
        angu_occ_237.push(response_occupancy[i].n);
        break;
      case "15": 
        angu_occ_241.push(response_occupancy[i].n);
        break;
      case "16": 
        angu_occ_243.push(response_occupancy[i].n);
        break;
      case "17": 
        angu_occ_254.push(response_occupancy[i].n);
        break;
      case "18": 
        angu_occ_292.push(response_occupancy[i].n);
        break;
      case "19": 
        angu_occ_293.push(response_occupancy[i].n);
        break;
      case "20": 
        angu_occ_295.push(response_occupancy[i].n);
        break;
      case "21": 
        angu_occ_296.push(response_occupancy[i].n);
        break;
      case "22": 
        ceme_occ_1202.push(response_occupancy[i].n);
        break;
      case "23": 
        ceme_occ_1204.push(response_occupancy[i].n);
        break;  
      case "24": 
        dmp_occ_101.push(response_occupancy[i].n);
        break;
      case "25": 
        dmp_occ_110.push(response_occupancy[i].n);
        break;
      case "26": 
        dmp_occ_201.push(response_occupancy[i].n);
        break;
      case "27": 
        dmp_occ_301.push(response_occupancy[i].n);
        break;
      case "28": 
        dmp_occ_310.push(response_occupancy[i].n);
        break;
      case "29": 
        henn_occ_200.push(response_occupancy[i].n);
        break;
      case "30": 
        henn_occ_201.push(response_occupancy[i].n);
        break;
      case "31": 
        henn_occ_202.push(response_occupancy[i].n);
        break;                  
    }
  }
}

// function find_room_capacity (roomID) {
//   for (var i = 0; i < response_courses.length; i++) {
//     if (response_courses[i].room_id == roomID) {
//       return parseInt(response_courses[i].capacity);
//     }
//   }
// }

// function percentBarChart() {
//   for (var i = 0; i < response_occupancy.length; i++) {
//     switch (response_occupancy[i].r) {
//       case "1": 
//         var capacity = find_room_capacity ("1");
//         Math.round(avg(angu_occ_343.push(response_occupancy[i].n / capacity ) * 100));
//         break;
//       case "2":
//         var capacity = find_room_capacity ("2");
//         Math.round(avg(angu_occ_345.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "3":
//         var capacity = find_room_capacity ("3");      
//         Math.round(avg(angu_occ_347.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "4":
//         var capacity = find_room_capacity ("4");
//         Math.round(avg(angu_occ_350.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "5": 
//         var capacity = find_room_capacity ("5");
//         Math.round(avg(angu_occ_354.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "6": 
//         var capacity = find_room_capacity ("6");
//         Math.round(avg(angu_occ_132.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "7": 
//         var capacity = find_room_capacity ("7");
//         Math.round(avg(angu_occ_133.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "8": 
//         var capacity = find_room_capacity ("8");
//         Math.round(avg(angu_occ_135.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "9": 
//         var capacity = find_room_capacity ("9");
//         Math.round(avg(angu_occ_291.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "10": 
//         var capacity = find_room_capacity ("10");
//         Math.round(avg(angu_occ_232.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "11": 
//         var capacity = find_room_capacity ("11");
//         Math.round(avg(angu_occ_233.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "12": 
//         var capacity = find_room_capacity ("12");
//         Math.round(avg(angu_occ_234.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "13": 
//         var capacity = find_room_capacity ("13");
//         Math.round(avg(angu_occ_235.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "14": 
//         var capacity = find_room_capacity ("14");
//         Math.round(avg(angu_occ_237.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "15": 
//         var capacity = find_room_capacity ("15");
//         Math.round(avg(angu_occ_241.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "16": 
//         var capacity = find_room_capacity ("16");
//         Math.round(avg(angu_occ_243.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "17": 
//         var capacity = find_room_capacity ("17");
//         Math.round(avg(angu_occ_254.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "18": 
//         var capacity = find_room_capacity ("18");
//         Math.round(avg(angu_occ_292.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "19": 
//         var capacity = find_room_capacity ("19");
//         Math.round(avg(angu_occ_293.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "20": 
//         var capacity = find_room_capacity ("20");
//         Math.round(avg(angu_occ_295.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "21": 
//         var capacity = find_room_capacity ("21");
//         Math.round(avg(angu_occ_296.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "22": 
//         var capacity = find_room_capacity ("22");
//         ceme_occMath.round(avg(_1202.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "23": 
//         var capacity = find_room_capacity ("23");
//         ceme_occMath.round(avg(_1204.push(response_occupancy[i].n) / capacity * 100));
//         break;  
//       case "24": 
//         var capacity = find_room_capacity ("24");
//         Math.round(avg(dmp_occ_101.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "25": 
//         var capacity = find_room_capacity ("25");
//         Math.round(avg(dmp_occ_110.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "26": 
//         var capacity = find_room_capacity ("26");
//         Math.round(avg(dmp_occ_201.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "27": 
//         var capacity = find_room_capacity ("27");
//         Math.round(avg(dmp_occ_301.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "28": 
//         var capacity = find_room_capacity ("28");
//         Math.round(avg(dmp_occ_310.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "29":
//         var capacity = find_room_capacity ("29");
//         Math.round(avg(henn_occ_200.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "30":
//         var capacity = find_room_capacity ("30");
//         Math.round(avg(henn_occ_201.push(response_occupancy[i].n) / capacity * 100));
//         break;
//       case "31":
//         var capacity = find_room_capacity ("31");
//         Math.round(avg(henn_occ_202.push(response_occupancy[i].n) / capacity * 100));
//         break;                  
//     }
//   }
// }

  function avg(array) {
    if (array == null) {return 0};
    var arr = array.reduce( (prev, curr) => parseInt(prev) + parseInt(curr) ) / array.length
    return Math.round(arr * 100) / 100;
  }

  function numberDataToChart4() {
    $('#graph4 .graphContainer').highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: 'Average Occupancy by Room'
      },
      xAxis: {
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Average Occupancy'
          }
      },
      legend: {
          enabled: false
      },
      tooltip: {
          pointFormat: 'Average Occupancy: <b>{point.y:.1f} </b>'
      },
      series: [{
        name: 'Average Occupancy',
        data: [
          ['ANGU Rm 343', avg(angu_occ_343)],
          ['ANGU Rm 345', avg(angu_occ_345)],
          ['ANGU Rm 347', avg(angu_occ_347)],
          ['ANGU Rm 350', avg(angu_occ_350)],
          ['ANGU Rm 354', avg(angu_occ_354)],
          ['ANGU Rm 132', avg(angu_occ_132)],
          ['ANGU Rm 133', avg(angu_occ_133)],
          ['ANGU Rm 135', avg(angu_occ_135)],
          ['ANGU Rm 291', avg(angu_occ_291)],
          ['ANGU Rm 232', avg(angu_occ_232)],
          ['ANGU Rm 233', avg(angu_occ_233)],
          ['ANGU Rm 234', avg(angu_occ_234)],
          ['ANGU Rm 235', avg(angu_occ_235)],
          ['ANGU Rm 237', avg(angu_occ_237)],
          ['ANGU Rm 241', avg(angu_occ_241)],
          ['ANGU Rm 243', avg(angu_occ_243)],
          ['ANGU Rm 254', avg(angu_occ_254)],
          ['ANGU Rm 292', avg(angu_occ_292)],
          ['ANGU Rm 293', avg(angu_occ_293)],
          ['ANGU Rm 292', avg(angu_occ_295)],
          ['ANGU Rm 293', avg(angu_occ_296)],
          ['CEME Rm 1202', avg(ceme_occ_1202)],
          ['CEME Rm 1204', avg(ceme_occ_1204)],
          ['DMP Rm 101', avg(dmp_occ_101)],
          ['DMP Rm 110', avg(dmp_occ_110)],
          ['DMP Rm 201', avg(dmp_occ_201)],
          ['DMP Rm 301', avg(dmp_occ_101)],
          ['DMP Rm 310', avg(dmp_occ_101)],
          ['HENN Rm 200', avg(henn_occ_200)],
          ['HENN Rm 201', avg(henn_occ_201)],
          ['HENN Rm 202', avg(henn_occ_202)],        
        ]
      }]
    });
  };

  // function percentDataToChart4() {
  //   $('#graph4 .graphContainer').highcharts({
  //     chart: {
  //         type: 'column'
  //     },
  //     title: {
  //         text: 'Average Percent Occupancy by Room'
  //     },
  //     xAxis: {
  //         type: 'category',
  //         labels: {
  //             rotation: -45,
  //             style: {
  //                 fontSize: '13px',
  //                 fontFamily: 'Verdana, sans-serif'
  //             }
  //         }
  //     },
  //     yAxis: {
  //         min: 0,
  //         title: {
  //             text: 'Average Percent Occupancy'
  //         }
  //     },
  //     legend: {
  //         enabled: false
  //     },
  //     tooltip: {
  //         pointFormat: 'Average Percent Occupancy: <b>{point.y:.1f} % </b>'
  //     },
  //     series: [{
  //       name: 'Average Percent Occupancy',
  //       color: '#2ca25f',
  //       data: [
  //         ['ANGU Rm 343', angu_occ_343],
  //         ['ANGU Rm 345', angu_occ_345],
  //         ['ANGU Rm 347', angu_occ_347],
  //         ['ANGU Rm 350', angu_occ_350],
  //         ['ANGU Rm 354', angu_occ_354],
  //         ['ANGU Rm 132', angu_occ_132],
  //         ['ANGU Rm 133', angu_occ_133],
  //         ['ANGU Rm 135', angu_occ_135],
  //         ['ANGU Rm 291', angu_occ_291],
  //         ['ANGU Rm 232', angu_occ_232],
  //         ['ANGU Rm 233', angu_occ_233],
  //         ['ANGU Rm 234', angu_occ_234],
  //         ['ANGU Rm 235', angu_occ_235],
  //         ['ANGU Rm 237', angu_occ_237],
  //         ['ANGU Rm 241', angu_occ_241],
  //         ['ANGU Rm 243', angu_occ_243],
  //         ['ANGU Rm 254', angu_occ_254],
  //         ['ANGU Rm 292', angu_occ_292],
  //         ['ANGU Rm 293', angu_occ_293],
  //         ['ANGU Rm 292', angu_occ_295],
  //         ['ANGU Rm 293', angu_occ_296],
  //         ['CEME Rm 1202', ceme_occ_1202],
  //         ['CEME Rm 1204', ceme_occ_1204],
  //         ['DMP Rm 101', dmp_occ_101],
  //         ['DMP Rm 110', dmp_occ_110],
  //         ['DMP Rm 201', dmp_occ_201],
  //         ['DMP Rm 301', dmp_occ_101],
  //         ['DMP Rm 310', dmp_occ_101],
  //         ['HENN Rm 200', henn_occ_200],
  //         ['HENN Rm 201', henn_occ_201],
  //         ['HENN Rm 202', henn_occ_202],        
  //       ]
  //     }]
  //   });
  // };


  barChart();
  numberDataToChart4();
}