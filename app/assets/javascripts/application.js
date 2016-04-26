//= require jquery
//= require jquery_ujs
//= require highcharts
//= require highstock/modules/exporting
//= require_tree .

$(function(){

  $.ajax({
    method: 'GET',
    url: '/data/show',
    dataType: 'json',
    contentType: 'application/json',
    success: function(response){
      graph1(response);
      // graph2(response);
      graph2(response);
      graph3(response);
      // graph4(response);
      // graph5(response);
    }
  });

  $('.tabs ul').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and its associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.parent().addClass('is-active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      console.log("Clicked tab")
      // Make the old tab inactive.
      $active.parent().removeClass('is-active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.parent().addClass('is-active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });

});













