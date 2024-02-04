const apiKey = "3c021b10c8c7e217476dff5ecd6ba5c1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } 
  else {
    var data = await response.json();

    console.log(data); //this is used to check api response

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Debugging: Output the weather condition to the console. Added console.log statements to see what values coming from the API response.
    console.log("Weather Condition:", data.weather[0].main);

    // for this (dot) . accessing go and view api calling on console of devTools to know how it's fecthing the data from nested objects of response

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } 
    else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } 
    else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } 
    else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } 
    else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } 
    else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";

    document.querySelector(".error").style.display = "none";
    //above this  display none of .error will hide error message when you give right input
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});


