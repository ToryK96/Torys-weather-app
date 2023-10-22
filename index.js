//current location and weather when page loads
function currentPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  //
  let apiKey = "7tc34ea233a0fd494dc646afo0f7bac1";
  let apiLocal = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  function getWeather(response) {
    console.log(response);
    let currentLoc = response.data.city;
    let currentTemp = Math.round(response.data.daily[0].temperature.day);
    let weatherType = response.data.daily[0].condition.description;
    let windSpeedNow = Math.round(response.data.daily[0].wind.speed * 2.23694);
    let iconElementNow = document.querySelector("#weather-icon-now");
    iconElementNow.setAttribute(
      "src",
      response.data.daily[0].condition.icon_url
    );
    iconElementNow.setAttribute(
      "alt",
      response.data.daily[0].condition.description
    );
    document.querySelector("#currentLoc").innerHTML = `${currentLoc}`;
    document.querySelector("#current-temp").innerHTML = `${currentTemp}℃`;
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
    celsiusTemperature = response.data.daily[0].temperature.day;
  }

  axios.get(apiLocal).then(getWeather);
}
navigator.geolocation.getCurrentPosition(currentPosition);

// current date and time
let today = new Date();
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

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
  return formattedDate;
}

function formatTime(time) {
  let hours = time.getHours();
  let mins = time.getMinutes();
  let formattedTime = `${hours}:${mins}`;
  return formattedTime;
}

document.querySelector("#todayDate").innerHTML = `${formatDate(today)}`;
document.querySelector("#timeNow").innerHTML = `${formatTime(today)}`;

//display current weather for searched city
function displayCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-location-text").value;
  document.querySelector("#currentLoc").innerHTML = `${cityName}`;
  let apiKey = "7tc34ea233a0fd494dc646afo0f7bac1";
  let apiSearch = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
  function searchWeather(response) {
    console.log(response);
    console.log(response.data.temperature.current);
    let currentTemp = document.querySelector("#current-temp");
    let weatherType = response.data.condition.description;
    let windSpeedNow = Math.round(response.data.wind.speed * 2.23694);
    let iconElementNow = document.querySelector("#weather-icon-now");
    iconElementNow.setAttribute("src", response.data.condition.icon_url);
    iconElementNow.setAttribute("alt", response.data.condition.description);
    currentTemp.innerHTML = Math.round(response.data.temperature.current);
    document.querySelector("#units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
    celsiusTemperature = response.data.temperature.current;
  }
  axios.get(apiSearch).then(searchWeather);
}
let searchLoc = document.querySelector("#search-location");
searchLoc.addEventListener("click", displayCity);

//current location button
let currentBTN = document.querySelector(".Current-Location-btn");
function getLocalWeather(event) {
  navigator.geolocation.getCurrentPosition(currentPosition);
}
currentBTN.addEventListener("click", getLocalWeather);

//convert to f
function farConvert(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temp");
  let farConvert = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(farConvert);
  document.querySelector("#units").innerHTML = "°F";
}
let displayFar = document.querySelector("#convert-far");
displayFar.addEventListener("click", farConvert);

//convert to c
function celsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  document.querySelector("#units").innerHTML = "℃";
}
let displayCel = document.querySelector("#convert-cel");
displayCel.addEventListener("click", celsius);
