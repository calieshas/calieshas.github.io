$(document).ready(function () {
    console.log("info");
getData();

    
});

function getData(){
    console.log("json");
    $.getJSON("/final-web-project/json/final-json.json", function (data) {
      console.log(data);
        
        var quote1 = data['portfolio']['quote1'];
        var quote2 = data['portfolio']['quote2'];
        var quote3 = data['portfolio']['quote3'];
        var quote4 = data['portfolio']['quote4'];
        var quote5 = data['portfolio']['quote5'];
        var quote6 = data['portfolio']['quote6'];
        
        var bblurry = data['basics']['blurry'];
        var bclear = data['basics']['clear'];
        var bisorose = data['basics']['isorose'];
        var baperturerose = data['basics']['aperturerose'];
        var bsunset = data['basics']['sunset'];
        var bclose = data['basics']['close'];
        var bfar = data['basics']['far'];
        
        
        console.log();


        $("#quote1").html(quote1);
        $("#quote2").html(quote2);
        $("#quote3").html(quote3);
        $("#quote4").html(quote4);
        $("#quote5").html(quote5);
        $("#quote6").html(quote6);
        
        $("#bblurry").html(bblurry);
        $("#bclear").html(bclear);
        $("#bisorose").html(bisorose);
        $("#baperturerose").html(baperturerose);
        $("#bsunset").html(bsunset);
        $("#bclose").html(bclose);
        $("#bfar").html(bfar);
        
 
     });
}
