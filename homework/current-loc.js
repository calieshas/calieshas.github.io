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
         url : "https://api.wunderground.com/api/d8aefd46611743c8/geolookup/conditions/forecast/hourly/satellite/q/" + lat + ',' + long + ".json",
    dataType : "jsonp",
    success : function(data) {
        console.log(data);
        
        var cityDisplay = data['location']['city'];
        var state = data['location']['state'];
        var tempf = data['current_observation']['temp_f'];
        var wind = data['current_observation']['wind_mph'];
        var direction = data['current_observation']['wind_dir'];
        var high = data['forecast']['simpleforecast']['forecastday']['0']['high']['fahrenheit'];
        var low = data['forecast']['simpleforecast']['forecastday']['0']['low']['fahrenheit'];
        var condition = data ['hourly_forecast']['0']['icon'];
        var precipitation = data ['forecast']['txt_forecast']['forecastday']['0']['pop'];
        
        console.log();


        $("#cityState").html(cityDisplay + ", " + state);
        $("#state").html(state);
        $("#tempf").html(tempf);
        $("#wind").html("Wind: " + wind + " mph");
        $("#direction").html("Direction: " + direction);
        $("#high").html("High: " + high + "&deg;");
        $("#low").html("Low: " + low + "&deg;");
        $("#condition").html(condition);
        $("#precipitation").html(precipitation);
 
        
         $("#cityStatel").html(cityDisplay + ", " + state);
        $("#statel").html(state);
        $("#tempfl").html(tempf);
        $("#windl").html("Wind: " + wind + " mph");
        $("#directionl").html("Direction: " + direction);
        $("#highl").html("High: " + high + "&deg;");
        $("#lowl").html("Low: " + low + "&deg;");
        $("#conditionl").html(condition);
        $("#precipitationl").html(precipitation);
 
        
  }
    });
      $("#cover").fadeOut(250);
        }
           });

  

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
