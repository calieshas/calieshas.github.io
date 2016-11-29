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
        var long = data['location']['lon'];
        var lat = data['location']['lat'];
        var zip = data['location']['zip'];
        var tempf = data['current_observation']['temp_f'];
        var wind = data['current_observation']['wind_mph'];
        var direction = data['current_observation']['wind_dir'];
        var high = data['forecast']['simpleforecast']['forecastday']['0']['high']['fahrenheit'];
        var low = data['forecast']['simpleforecast']['forecastday']['0']['low']['fahrenheit'];
        var condition = data ['hourly_forecast']['0']['icon'];
        var precipitation = data ['forecast']['txt_forecast']['forecastday']['0']['pop'];
        
        
        $("#cityDisplay").html(cityDisplay + ",");
        $("#state").html(state);
        $("#long").html(long);
        $("#lat").html(lat);
        $("#zip").html(zip);
        $("#tempf").html(tempf);
        $("#wind").html(wind);
        $("#direction").html(direction);
        $("#high").html(high);
        $("#low").html(low);
        $("#conditions").html(conditions);
        $("#precipitation").html(precipitation);
        
        
        
        
        
        var hr0 = data['hourly_forecast']['0']['FCTTIME']['civil'];
        var hr1 = data['hourly_forecast']['1']['FCTTIME']['civil'];
        var hr2 = data['hourly_forecast']['2']['FCTTIME']['civil'];
        var hr3 = data['hourly_forecast']['3']['FCTTIME']['civil'];
        var hr4 = data['hourly_forecast']['4']['FCTTIME']['civil'];
        var hr5 = data['hourly_forecast']['5']['FCTTIME']['civil'];
        var hr6 = data['hourly_forecast']['6']['FCTTIME']['civil'];
        var hr7 = data['hourly_forecast']['7']['FCTTIME']['civil'];
        var hr8 = data['hourly_forecast']['8']['FCTTIME']['civil'];
        var hr9 = data['hourly_forecast']['9']['FCTTIME']['civil'];
        var hr10 = data['hourly_forecast']['10']['FCTTIME']['civil'];
        var hr11 = data['hourly_forecast']['11']['FCTTIME']['civil'];
        var hr12 = data['hourly_forecast']['12']['FCTTIME']['civil'];
        var hr13 = data['hourly_forecast']['13']['FCTTIME']['civil'];
        var hr14 = data['hourly_forecast']['14']['FCTTIME']['civil'];
        var hr15 = data['hourly_forecast']['15']['FCTTIME']['civil'];
        var hr16 = data['hourly_forecast']['16']['FCTTIME']['civil'];
        var hr17 = data['hourly_forecast']['17']['FCTTIME']['civil'];
        var hr18 = data['hourly_forecast']['18']['FCTTIME']['civil'];
        var hr19 = data['hourly_forecast']['19']['FCTTIME']['civil'];
        var hr20 = data['hourly_forecast']['20']['FCTTIME']['civil'];
        var hr21 = data['hourly_forecast']['21']['FCTTIME']['civil'];
        var hr22 = data['hourly_forecast']['22']['FCTTIME']['civil'];
        var hr23 = data['hourly_forecast']['23']['FCTTIME']['civil'];
        var temp0 = data['hourly_forecast']['0']['temp']['english'];
        var temp1 = data['hourly_forecast']['1']['temp']['english'];
        var temp2 = data['hourly_forecast']['2']['temp']['english'];
        var temp3 = data['hourly_forecast']['3']['temp']['english'];
        var temp4 = data['hourly_forecast']['4']['temp']['english'];
        var temp5 = data['hourly_forecast']['5']['temp']['english'];
        var temp6 = data['hourly_forecast']['6']['temp']['english'];
        var temp7 = data['hourly_forecast']['7']['temp']['english'];
        var temp8 = data['hourly_forecast']['8']['temp']['english'];
        var temp9 = data['hourly_forecast']['9']['temp']['english'];
        var temp10 = data['hourly_forecast']['10']['temp']['english'];
        var temp11 = data['hourly_forecast']['11']['temp']['english'];
        var temp12 = data['hourly_forecast']['12']['temp']['english'];
        var temp13 = data['hourly_forecast']['13']['temp']['english'];
        var temp14 = data['hourly_forecast']['14']['temp']['english'];
        var temp15 = data['hourly_forecast']['15']['temp']['english'];
        var temp16 = data['hourly_forecast']['16']['temp']['english'];
        var temp17 = data['hourly_forecast']['17']['temp']['english'];
        var temp18 = data['hourly_forecast']['18']['temp']['english'];
        var temp19 = data['hourly_forecast']['19']['temp']['english'];
        var temp20 = data['hourly_forecast']['20']['temp']['english'];
        var temp21 = data['hourly_forecast']['21']['temp']['english'];
        var temp22 = data['hourly_forecast']['22']['temp']['english'];
        var temp23 = data['hourly_forecast']['23']['temp']['english'];

        
            $("#time0").html(hr0);
            $("#time1").html(hr1);
            $("#time2").html(hr2);
            $("#time3").html(hr3);
            $("#time4").html(hr4);
            $("#time5").html(hr5);
            $("#time6").html(hr6);
            $("#time7").html(hr7);
            $("#time8").html(hr8);
            $("#time9").html(hr9);
            $("#time10").html(hr10);
            $("#time11").html(hr11);
            $("#time12").html(hr12);
            $("#time13").html(hr13);
            $("#time14").html(hr14);
            $("#time15").html(hr15);
            $("#time16").html(hr16);
            $("#time17").html(hr17);
            $("#time18").html(hr18);
            $("#time19").html(hr19);
            $("#time20").html(hr20);
            $("#time21").html(hr21);
            $("#time22").html(hr22);
            $("#time23").html(hr23);

            $("#hr_temp0").html(temp0+ "&deg;" + "F");
            $("#hr_temp1").html(temp1+ "&deg;" + "F");
            $("#hr_temp2").html(temp2+ "&deg;" + "F");
            $("#hr_temp3").html(temp3+ "&deg;" + "F");
            $("#hr_temp4").html(temp4+ "&deg;" + "F");
            $("#hr_temp5").html(temp5+ "&deg;" + "F");
            $("#hr_temp6").html(temp6+ "&deg;" + "F");
            $("#hr_temp7").html(temp7+ "&deg;" + "F");
            $("#hr_temp8").html(temp8+ "&deg;" + "F");
            $("#hr_temp9").html(temp9+ "&deg;" + "F");
            $("#hr_temp10").html(temp10+ "&deg;" + "F");
            $("#hr_temp11").html(temp11+ "&deg;" + "F");
            $("#hr_temp12").html(temp12+ "&deg;" + "F");
            $("#hr_temp13").html(temp13+ "&deg;" + "F");
            $("#hr_temp14").html(temp14+ "&deg;" + "F");
            $("#hr_temp15").html(temp15+ "&deg;" + "F");
            $("#hr_temp16").html(temp16+ "&deg;" + "F");
            $("#hr_temp17").html(temp17+ "&deg;" + "F");
            $("#hr_temp18").html(temp18+ "&deg;" + "F");
            $("#hr_temp19").html(temp19+ "&deg;" + "F");
            $("#hr_temp20").html(temp20+ "&deg;" + "F");
            $("#hr_temp21").html(temp21+ "&deg;" + "F");
            $("#hr_temp22").html(temp22+ "&deg;" + "F");
            $("#hr_temp23").html(temp23+ "&deg;" + "F");


  }
    });
      $("#cover").fadeOut(250);
        }
           });

  

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
