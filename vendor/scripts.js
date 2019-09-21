$(document).ready(function(){
  $(".home_slider .owl-carousel").owlCarousel({
      items: 1
  });

  let apiUrl = 'https://fcc-weather-api.glitch.me/api/current?lat=51.23&lon=22.56';

  function getWeaterData(){
    $.ajax({
      type: "GET",
      url: apiUrl,
      cache: false,
      contentType: "application/json",
      success: function(data,status,xhr){
        $('#temp').html(data.main.temp);
        $('#hum').html(data.main.humidity);
        $('#weather').attr('src',data.weather[0].icon);
      },
      error: function(xhr, status){
        console.log('error ',status);
      }
      
    });
  }

  getWeaterData();

  setInterval(function(){
    getWeaterData();
  },30000)

  
 /*  apiUrl =  'http://api.openweathermap.org/data/2.5/forecast?id=765876&APPID=427a512a2a7f5689aa9a72029006d7e5';
  
  $.ajax({
    type: "GET",
    url: apiUrl,
    cache: false,
    contentType: "application/json",
    success: function(data,status,xhr){
      $('#temp').html(data.main.temp);
      $('#hum').html(data.main.humidity);
      $('#weather').attr('src',data.weather[0].icon);
    },
    error: function(xhr, status){
      console.log('error ',status);
    }
    
  }); */
 
 
});