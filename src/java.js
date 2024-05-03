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
}

function displayCity(city) {
  let apiKey = "700ad940f9ffadd843o04ae7ba43d1t8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

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





function displayForecast () {


let forecastHtml = "";

let days = ["Fri", "Sat", "Sun", "Mon", "Tue"];
days.forEach(function(day) {

forecastHtml =  forecastHtml + 
`

 <p class="hour">
           <span> ${day} </span> <br />
            <span> ⛅ </sapn> <br />
           <span> 16℃ </span> &nbsp; <span>  <small>14℃</small> </span>
          </p>

`;


});

let forecastElement = document.querySelector("#hourly-weather");
forecastElement.innerHTML = forecastHtml;

}

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", searchCity);

displayCity("Vanderbijlpark");

displayForecast ();










    
