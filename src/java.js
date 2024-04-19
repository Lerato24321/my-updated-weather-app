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

  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[now.getDay()];
  let displayDay = document.querySelector("#weather-app-day");
  displayDay.innerHTML = day;


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

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", searchCity);

displayCity("Vanderbijlpark");
