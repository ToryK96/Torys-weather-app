//current location and weather when page loads
function currentPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let myLocation = document.querySelector("#currentLoc");
  myLocation.innerHTML = `Current location`;
  //
  let apiKey = "5354b60afda2b7800186c06153932396";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  function getWeather(response) {
    console.log(response);
    console.log(response.data.main.temp);
    let currentTemp = Math.round(response.data.main.temp);
    let weatherType = response.data.weather[0].description;
    let windSpeedNow = Math.round(response.data.wind.speed * 2.23694);
    document.querySelector("#current-temp").innerHTML = `${currentTemp}℃`;
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
  }

  axios.get(apiUrl).then(getWeather);
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
    let currentTemp = Math.round(response.data.temperature.current);
    let weatherType = response.data.condition.description;
    let windSpeedNow = Math.round(response.data.wind.speed * 2.23694);
    let iconElementNow = document.querySelector("#weather-icon-now");
    iconElementNow.setAttribute("src", response.data.condition.icon_url);
    iconElementNow.setAttribute("alt", response.data.condition.description);
    document.querySelector("#current-temp").innerHTML = `${currentTemp}℃`;
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
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

// convert to fahrenheit
function displayFar(event) {
  event.preventDefault();
  let temperatureC = document.querySelector("#current-temp").innerHTML;
  let fahrenheitConversion = Math.round((Number(temperatureC) * 9) / 5 + 32);
  document.querySelector("#current-temp").innerHTML = `${fahrenheitConversion}`;
  document.querySelector("#celcius").innerHTML = "F";
}
let farConvert = document.querySelector("#convert-far");
farConvert.addEventListener("click", displayFar);

// convert to celcius
function displayCel(event) {
  event.preventDefault();
  let temperatureF = document.querySelector("#current-temp").innerHTML;
  let fahrenheitConversion = Math.round(((Number(temperatureF) - 32) * 5) / 9);
  document.querySelector("#current-temp").innerHTML = `${fahrenheitConversion}`;
  document.querySelector("#celcius").innerHTML = "F";
}
let celConvert = document.querySelector("#convert-cel");
celConvert.addEventListener("click", displayCel);
