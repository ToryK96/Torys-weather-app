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
  function updateweatherdayX(response, dayIndex) {
    let highTemp = document.querySelector(`#high-temp-day-${dayIndex}`);
    let lowTemp = document.querySelector(`#low-temp-day-${dayIndex}`);
    let weatherType = response.data.daily[dayIndex].condition.description;
    let windSpeedNow = Math.round(
      response.data.daily[dayIndex].wind.speed * 2.23694
    );
    let iconElementNow = document.querySelector(`#weather-icon-day${dayIndex}`);
    iconElementNow.setAttribute(
      "src",
      response.data.daily[dayIndex].condition.icon_url
    );
    iconElementNow.setAttribute(
      "alt",
      response.data.daily[dayIndex].condition.description
    );
    highTemp.innerHTML = Math.round(
      response.data.daily[dayIndex].temperature.maximum
    );
    lowTemp.innerHTML = Math.round(
      response.data.daily[dayIndex].temperature.minimum
    );
    document.querySelector(".units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
  }

  axios.get(apiLocal).then(getWeather);
  axios.get(apiLocal).then((response) => {
    for (let i = 1; i <= 5; i++) {
      updateweatherdayX(response, i);
    }
  });
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
function findDay1(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day1 = days[date.getDay() + 1];
  return day1;
}
function findDay2(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day2 = days[date.getDay() + 2];
  return day2;
}
function findDay3(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day3 = days[date.getDay() + 3];
  return day3;
}
function findDay4(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day4 = days[date.getDay() + 4];
  return day4;
}
function findDay5(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day5 = days[date.getDay() + 5];
  return day5;
}

function formatTime(time) {
  let hours = time.getHours();
  let mins = time.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }
  let formattedTime = `${hours}:${mins}`;
  return formattedTime;
}

document.querySelector("#todayDate").innerHTML = `${formatDate(today)}`;
document.querySelector("#day1").innerHTML = `${findDay1(today)}`;
document.querySelector("#day2").innerHTML = `${findDay2(today)}`;
document.querySelector("#day3").innerHTML = `${findDay3(today)}`;
document.querySelector("#day4").innerHTML = `${findDay4(today)}`;
document.querySelector("#day5").innerHTML = `${findDay5(today)}`;
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
  function updateweatherdayX(response, dayIndex) {
    let highTemp = document.querySelector(`#high-temp-day-${dayIndex}`);
    let lowTemp = document.querySelector(`#low-temp-day-${dayIndex}`);
    let weatherType = response.data.daily[dayIndex].condition.description;
    let windSpeedNow = Math.round(
      response.data.daily[dayIndex].wind.speed * 2.23694
    );
    let iconElementNow = document.querySelector(`#weather-icon-day${dayIndex}`);
    iconElementNow.setAttribute(
      "src",
      response.data.daily[dayIndex].condition.icon_url
    );
    iconElementNow.setAttribute(
      "alt",
      response.data.daily[dayIndex].condition.description
    );
    highTemp.innerHTML = Math.round(
      response.data.daily[dayIndex].temperature.maximum
    );
    lowTemp.innerHTML = Math.round(
      response.data.daily[dayIndex].temperature.minimum
    );
    document.querySelector(".units").innerHTML = "℃";
    document.querySelector("#cloud-cover").innerHTML = `${weatherType}`;
    document.querySelector(
      ".wind-stats-now"
    ).innerHTML = `${windSpeedNow}mph wind`;
  }

  axios.get(apiSearch).then(currentWeather);
  axios.get(apiSearch).then((response) => {
    for (let i = 1; i <= 5; i++) {
      updateweatherdayX(response, i);
    }
  });
}
let searchLoc = document.querySelector("#search-location");
searchLoc.addEventListener("click", displayCity);

//current location button
let currentBTN = document.querySelector(".Current-Location-btn");
function getLocalWeather(event) {
  navigator.geolocation.getCurrentPosition(currentPosition);
}
currentBTN.addEventListener("click", getLocalWeather);

//convert to f (current weather only)
function farConvert(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temp");
  let farConvert = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(farConvert);
  document.querySelector(".units").innerHTML = "°F";
}
let displayFar = document.querySelector("#convert-far");
displayFar.addEventListener("click", farConvert);

//convert to c (current weather only)
function celsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  document.querySelector(".units").innerHTML = "℃";
}
let displayCel = document.querySelector("#convert-cel");
displayCel.addEventListener("click", celsius);
