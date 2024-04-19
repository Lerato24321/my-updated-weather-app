function updateWeatherInfo(response) {
  let currentTemperature = document.querySelector("#main-temperature");
  let temperature = response.data.temperature.current;
  currentTemperature.innerHTML = Math.round(temperature);

  let cityName = document.querySelector("#weather-app-city-name");
  cityName.innerHTML = response.data.city;
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

displayCity ("Vanderbijlpark");
