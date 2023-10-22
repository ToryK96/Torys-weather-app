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
  function weatherday1(response) {
    console.log(response);
    let highTemp = document.querySelector("#high-temp-day-1");
    let lowTemp = document.querySelector("#low-temp-day-1");
    let weatherType = response.data.daily[1].condition.description;
    let windSpeedNow = Math.round(response.data.daily[1].wind.speed * 2.23694);
    let iconElementNow = document.querySelector("#weather-icon-day1");
    iconElementNow.setAttribute(
      "src",
      response.data.daily[1].condition.icon_url
    );
    iconElementNow.setAttribute(
      "alt",
      response.data.daily[1].condition.description
    );
    highTemp.innerHTML = Math.round(response.data.daily[1].temperature.maximum);
    lowTemp.innerHTML = Math.round(response.data.daily[1].temperature.minimum);
    document.querySelector(".units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
  }
  function weatherday2(response) {
    console.log(response);
    let highTemp = document.querySelector("#high-temp-day-2");
    let lowTemp = document.querySelector("#low-temp-day-2");
    let weatherType = response.data.daily[2].condition.description;
    let windSpeedNow = Math.round(response.data.daily[2].wind.speed * 2.23694);
    let iconElementNow = document.querySelector("#weather-icon-day2");
    iconElementNow.setAttribute(
      "src",
      response.data.daily[2].condition.icon_url
    );
    iconElementNow.setAttribute(
      "alt",
      response.data.daily[2].condition.description
    );
    highTemp.innerHTML = Math.round(response.data.daily[2].temperature.maximum);
    lowTemp.innerHTML = Math.round(response.data.daily[2].temperature.minimum);
    document.querySelector(".units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
  }
  function weatherday3(response) {
    console.log(response);
    let highTemp = document.querySelector("#high-temp-day-3");
    let lowTemp = document.querySelector("#low-temp-day-3");
    let weatherType = response.data.daily[3].condition.description;
    let windSpeedNow = Math.round(response.data.daily[3].wind.speed * 2.23694);
    let iconElementNow = document.querySelector("#weather-icon-day3");
    iconElementNow.setAttribute(
      "src",
      response.data.daily[3].condition.icon_url
    );
    iconElementNow.setAttribute(
      "alt",
      response.data.daily[3].condition.description
    );
    highTemp.innerHTML = Math.round(response.data.daily[3].temperature.maximum);
    lowTemp.innerHTML = Math.round(response.data.daily[3].temperature.minimum);
    document.querySelector(".units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
  }
  function weatherday4(response) {
    console.log(response);
    let highTemp = document.querySelector("#high-temp-day-4");
    let lowTemp = document.querySelector("#low-temp-day-4");
    let weatherType = response.data.daily[4].condition.description;
    let windSpeedNow = Math.round(response.data.daily[4].wind.speed * 2.23694);
    let iconElementNow = document.querySelector("#weather-icon-day4");
    iconElementNow.setAttribute(
      "src",
      response.data.daily[4].condition.icon_url
    );
    iconElementNow.setAttribute(
      "alt",
      response.data.daily[4].condition.description
    );
    highTemp.innerHTML = Math.round(response.data.daily[4].temperature.maximum);
    lowTemp.innerHTML = Math.round(response.data.daily[4].temperature.minimum);
    document.querySelector(".units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
  }
  function weatherday5(response) {
    console.log(response);
    let highTemp = document.querySelector("#high-temp-day-5");
    let lowTemp = document.querySelector("#low-temp-day-5");
    let weatherType = response.data.daily[5].condition.description;
    let windSpeedNow = Math.round(response.data.daily[5].wind.speed * 2.23694);
    let iconElementNow = document.querySelector("#weather-icon-day5");
    iconElementNow.setAttribute(
      "src",
      response.data.daily[5].condition.icon_url
    );
    iconElementNow.setAttribute(
      "alt",
      response.data.daily[5].condition.description
    );
    highTemp.innerHTML = Math.round(response.data.daily[5].temperature.maximum);
    lowTemp.innerHTML = Math.round(response.data.daily[5].temperature.minimum);
    document.querySelector(".units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
  }

  axios.get(apiLocal).then(getWeather);
  axios.get(apiLocal).then(weatherday1);
  axios.get(apiLocal).then(weatherday2);
  axios.get(apiLocal).then(weatherday3);
  axios.get(apiLocal).then(weatherday4);
  axios.get(apiLocal).then(weatherday5);
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

//display weather for searched city
function displayCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-location-text").value;
  document.querySelector("#currentLoc").innerHTML = `${cityName}`;
  let apiKey = "7tc34ea233a0fd494dc646afo0f7bac1";
  let apiSearch = `https://api.shecodes.io/weather/v1/forecast?query=${cityName}&key=${apiKey}&units=metric`;
  function currentWeather(response) {
    console.log(response);
    let currentTemp = document.querySelector("#current-temp");
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
    currentTemp.innerHTML = Math.round(response.data.daily[0].temperature.day);
    document.querySelector(".units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
    celsiusTemperature = response.data.daily[0].temperature.day;
  }
  function weatherday1(response) {
    console.log(response);
    let highTemp = document.querySelector("#high-temp-day-1");
    let lowTemp = document.querySelector("#low-temp-day-1");
    let weatherType = response.data.daily[1].condition.description;
    let windSpeedNow = Math.round(response.data.daily[1].wind.speed * 2.23694);
    let iconElementNow = document.querySelector("#weather-icon-day1");
    iconElementNow.setAttribute(
      "src",
      response.data.daily[1].condition.icon_url
    );
    iconElementNow.setAttribute(
      "alt",
      response.data.daily[1].condition.description
    );
    highTemp.innerHTML = Math.round(response.data.daily[1].temperature.maximum);
    lowTemp.innerHTML = Math.round(response.data.daily[1].temperature.minimum);
    document.querySelector(".units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
  }
  function weatherday2(response) {
    console.log(response);
    let highTemp = document.querySelector("#high-temp-day-2");
    let lowTemp = document.querySelector("#low-temp-day-2");
    let weatherType = response.data.daily[2].condition.description;
    let windSpeedNow = Math.round(response.data.daily[2].wind.speed * 2.23694);
    let iconElementNow = document.querySelector("#weather-icon-day2");
    iconElementNow.setAttribute(
      "src",
      response.data.daily[2].condition.icon_url
    );
    iconElementNow.setAttribute(
      "alt",
      response.data.daily[2].condition.description
    );
    highTemp.innerHTML = Math.round(response.data.daily[2].temperature.maximum);
    lowTemp.innerHTML = Math.round(response.data.daily[2].temperature.minimum);
    document.querySelector(".units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
  }
  function weatherday3(response) {
    console.log(response);
    let highTemp = document.querySelector("#high-temp-day-3");
    let lowTemp = document.querySelector("#low-temp-day-3");
    let weatherType = response.data.daily[3].condition.description;
    let windSpeedNow = Math.round(response.data.daily[3].wind.speed * 2.23694);
    let iconElementNow = document.querySelector("#weather-icon-day3");
    iconElementNow.setAttribute(
      "src",
      response.data.daily[3].condition.icon_url
    );
    iconElementNow.setAttribute(
      "alt",
      response.data.daily[3].condition.description
    );
    highTemp.innerHTML = Math.round(response.data.daily[3].temperature.maximum);
    lowTemp.innerHTML = Math.round(response.data.daily[3].temperature.minimum);
    document.querySelector(".units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
  }
  function weatherday4(response) {
    console.log(response);
    let highTemp = document.querySelector("#high-temp-day-4");
    let lowTemp = document.querySelector("#low-temp-day-4");
    let weatherType = response.data.daily[4].condition.description;
    let windSpeedNow = Math.round(response.data.daily[4].wind.speed * 2.23694);
    let iconElementNow = document.querySelector("#weather-icon-day4");
    iconElementNow.setAttribute(
      "src",
      response.data.daily[4].condition.icon_url
    );
    iconElementNow.setAttribute(
      "alt",
      response.data.daily[4].condition.description
    );
    highTemp.innerHTML = Math.round(response.data.daily[4].temperature.maximum);
    lowTemp.innerHTML = Math.round(response.data.daily[4].temperature.minimum);
    document.querySelector(".units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
  }
  function weatherday5(response) {
    console.log(response);
    let highTemp = document.querySelector("#high-temp-day-5");
    let lowTemp = document.querySelector("#low-temp-day-5");
    let weatherType = response.data.daily[5].condition.description;
    let windSpeedNow = Math.round(response.data.daily[5].wind.speed * 2.23694);
    let iconElementNow = document.querySelector("#weather-icon-day5");
    iconElementNow.setAttribute(
      "src",
      response.data.daily[5].condition.icon_url
    );
    iconElementNow.setAttribute(
      "alt",
      response.data.daily[5].condition.description
    );
    highTemp.innerHTML = Math.round(response.data.daily[5].temperature.maximum);
    lowTemp.innerHTML = Math.round(response.data.daily[5].temperature.minimum);
    document.querySelector(".units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
  }
  axios.get(apiSearch).then(currentWeather);
  axios.get(apiSearch).then(weatherday1);
  axios.get(apiSearch).then(weatherday2);
  axios.get(apiSearch).then(weatherday3);
  axios.get(apiSearch).then(weatherday4);
  axios.get(apiSearch).then(weatherday5);
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
  document.querySelector(".units").innerHTML = "°F";
}
let displayFar = document.querySelector("#convert-far");
displayFar.addEventListener("click", farConvert);

//convert to c
function celsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  document.querySelector(".units").innerHTML = "℃";
}
let displayCel = document.querySelector("#convert-cel");
displayCel.addEventListener("click", celsius);
