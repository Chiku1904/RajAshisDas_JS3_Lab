let searchCity= document.getElementById("search-city");
let city= document.getElementById("city");
let date= document.getElementById("date");
let temp= document.getElementById("temp");
let weatherCondition= document.getElementById("weather_condition");
let minMaxTemp= document.getElementById("min_max_temp");

searchCity.addEventListener("keypress", (e)=>{

  if(e.keyCode==13){
    fetchWeather(searchCity.value);
  }
})

function fetchWeather(cityName){

    let appid= "c3f7228706610e352c4391a2cfd380c4";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}&units=metric`)
    .then(response => response.json())
    .then(response => displayWeather(response))
}

function displayWeather(weather){
    city.innerText= `${weather.name}, ${weather.sys.country}`;
    temp.innerText= `${Math.round(weather.main.temp)}°C`;
    weatherCondition.innerText=`${weather.weather[0].main}`;
    minMaxTemp.innerText= `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
date.innerText= getDate();
}

function getDate(){

    let days= new Date();
    let months= ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] ;
    let day= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return `${day[days.getDay()]}, ${days.getDate()} ${months[days.getMonth()]} ${days.getFullYear()}`;
}