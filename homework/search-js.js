$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;


        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();
    
    
    $('#query').keyup(function(){

    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
     $.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
                 console.log(data);
       console.log(data)
        

    var output = '<ol id="ol">';
    $.each(data.RESULTS, function(key, val) {
      if (val.name.search(rExp) != -1) {
        output += '<li>';
        output += '<a href="https://www.wunderground.com' + val.l +'"title=" see results for'+ val.name + '">' + val.name + '</a>';
        output += '</li>';
         
      }
    }); 
    output += '</ol>';
    $("#searchResults").html(output);
        function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

     }); // end getJSONs
}); // end keyup
$( "#searchResults" ).click(function(getData) {
    
    });
    

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
        };

    
    
    $("#searchResults").on("click", "a", function (evt) {
  evt.preventDefault();
  
  var jsonCity = $(this).text(); // Franklin, etc...
  console.log(jsonCity);
  $.ajax({
    url: "https://api.wunderground.com/api/d8aefd46611743c8/geolookup/conditions/forecast/hourly/satellite/q/" + jsonCity + ".json"
    , dataType: "jsonp"
    , success: function (data) {
      console.log(data);
      console.log(data['location']['zip']);
      var zip = data['location']['zip'];
    console.log(zip);
    getData(zip);
    }
  });
});

$("#searchResults").on('click', "a", function(evt){
    document.getElementById('ol').style.display="none";
})


  

  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}