function updateWeatherInfo(response) {
  let currentTemperature = document.querySelector("#main-temperature");
  let temperature = response.data.temperature.current;
  currentTemperature.innerHTML = Math.round(temperature);

  let cityName = document.querySelector("#weather-app-city-name");
  cityName.innerHTML = response.data.city;

  let displayHumidity = document.querySelector("#weather-humidity");
  let humidity = response.data.temperature.humidity;
  displayHumidity.innerHTML = humidity;

  let displayWind = document.querySelector("#weather-wind");
  let wind = Math.round(response.data.wind.speed);
  displayWind.innerHTML = wind;


  

  let displayTime = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  displayTime.innerHTML = `${hours}:${minutes}`;

  let displayDay = document.querySelector("#weather-app-day");
  displayDay.innerHTML = formatDate(date);

  let weatherIcon = document.querySelector("#weather-app-icon");
  weatherIcon.innerHTML = `<img src="${response.data.condition.icon_url}" />`;

  getForecast(response.data.city);

}

function displayCity(city) {
  let apiKey = "700ad940f9ffadd843o04ae7ba43d1t8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(updateWeatherInfo);
}

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#enter-city-name");

  displayCity(cityElement.value);
}



function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];

  let dayIndex = date.getDate();

  let year = date.getFullYear();

  return `${day}, ${dayIndex} ${month} ${year}`;
}


function formatDay(timestamp) {
  let date = new Date (timestamp * 1000);
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  return days[(date.getDay())];

}

function getForecast (city) {

  let apiKey = "700ad940f9ffadd843o04ae7ba43d1t8";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}




// instead of repeating the code many times, use a loop.
function displayForecast (response) { 

let forecastHtml = "";


response.data.daily.forEach(function(day, index) {

  if (index < 4) {

forecastHtml =
  forecastHtml +
  `

 <p class="day">
           <span> ${formatDay(day.time)} </span> <br />
            <span> 

            <img src="${day.condition.icon_url}"  class="forecast-icon" />
            
            </sapn> <br />
           <span id="max-temperature" > ${Math.round(
             day.temperature.maximum
           )}℃ </span> &nbsp; <span  id="min-temperature">  
           <small>${Math.round(day.temperature.minimum)}℃</small> </span>
          </p>

`;
  }

});


function viewCity() {
  let cityElement = document.querySelector("#popular-city-1");
  cityElement.innerHTML = "The land of the Midnight Sun ☀️ ";
}

function viewOriginal(response) {
  let originalCity = document.querySelector("#popular-city-1");
  originalCity.innerHTML = "Norway";

}

let popularCities = document.querySelector ("#popular-city-1");
popularCities.addEventListener("mouseover", viewCity, false);
popularCities.addEventListener("mouseout", viewOriginal, false);





function viewParis() {
let parisElement = document.querySelector("#popular-city-2");
parisElement.innerHTML = "Has a very oceanic climate 🌊";
}

function viewParisOriginal() {
  let parisOriginal = document.querySelector("#popular-city-2");
  parisOriginal.innerHTML = "Paris";
}


let parisCity = document.querySelector("#popular-city-2");
parisCity.addEventListener("mouseover", viewParis, false);
parisCity.addEventListener("mouseout", viewParisOriginal, false);




function capeView() {
  let cityElement = document.querySelector("#popular-city-3");
  cityElement.innerHTML = "10% difference between summer and winter T℃";
}

function capeOriginal () {

  let capeInitial = document.querySelector("#popular-city-3");
  capeInitial.innerHTML = "Cape Town";


}



let capeCity = document.querySelector("#popular-city-3");
capeCity.addEventListener("mouseover", capeView, false);
capeCity.addEventListener("mouseout", capeOriginal, false);





let forecastElement = document.querySelector("#daily-weather");
forecastElement.innerHTML = forecastHtml;

}

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", searchCity);

displayCity("Vanderbijlpark");











    
