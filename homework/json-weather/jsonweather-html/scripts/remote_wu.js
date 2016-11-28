// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({

url : "https://api.wunderground.com/api/d8aefd46611743c8/geolookup/conditions/forecast/q/" + lat + ',' + long + ".json",
  dataType : "jsonp",
  success : function(data) {
  var location = data['location']['city'];
  var temp_f = data['current_observation']['temp_f'];
  var state = data['location']['state'];
  var summary = data['current_observation']['weather'];
  var wind = data['current_observation']['wind_mph'];
  var high = data['forecast']['simpleforecast']['forecastday']['0']['high']['fahrenheit'];
  var low = data['forecast']['simpleforecast']['forecastday']['0']['low']['fahrenheit'];

      $("#cityDisplay").html(location + ", "+ state);
      $("title").html(location + ", "+ state);
      $("#currentTemp").html(Math.round(temp_f) + "&deg;" + "F");
      $("#summary").html("Current Conditions: " + summary);
      $("#add1").html("Wind Speed: " + wind + " mph");
      $("#add2").html("Today's High: " + high + "&deg;" + "F");
      $("#add3").html("Today's Low: " + low + "&deg;" + "F");
  }
    });

      $("#cover").fadeOut(250);
    }
           });


  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };
