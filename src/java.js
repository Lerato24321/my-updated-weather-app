function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#enter-city-name");
  let cityName = document.querySelector("#weather-app-city-name");
  cityName.innerHTML = cityElement.value;
}

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", searchCity);
