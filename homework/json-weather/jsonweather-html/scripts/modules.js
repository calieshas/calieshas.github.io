// Include modules into the html file
// Pathes may need altered depending on site structure
$(function () {
  $("#page-header").load("/homework/json-weather/jsonweather-html/modules/header.html");
  $("#page-nav").load("/homework/json-weather/jsonweather-html/modules/navigation.html");
  $("#footer-content").load("/homework/json-weather/jsonweather-html/modules/footer.html");
});
