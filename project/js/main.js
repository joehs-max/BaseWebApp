$(document).ready(function(){
  getWeather();
})
function getWeather(searchquery) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchquery+"&units=imperial&APPID="+apiKey; 

  $(".city").text("");
  $(".temp").text("");
  $(".error-message").text("");


  $.ajax(url,{success: function(data){
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);
}, error: function(error){
    $(".error-message").text("An error occured");
}})
}
function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#doge-image").append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
}

function searchWeather(){
  var searchquery = $(".search").val();
  getWeather(searchquery);
}
