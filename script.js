
// weather API
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


// Javascript object
const weatherApi= {
    key: "d7f8ec7c3f42bfb0317311046ea6a662",
    baseURL: "https://api.openweathermap.org/data/2.5/weather"
}

//Event Listener Function on keypress
const SearchCityInputBox = document.getElementById("input-box");

// Event Listener function  on keypress
SearchCityInputBox.addEventListener("keypress", (event) => {

    if(event.keyCode == 13) {
        console.log(SearchCityInputBox.value);

        // Function call
        getWeatherReport(SearchCityInputBox.value);

        // display weather info on keypress 
        document.querySelector(".weather-info").style.display = "block";

    }
    

});




//Get Weather Report

function getWeatherReport(city) {
    
    // fetching the data from OpenWeatherMap Api
    fetch(`${weatherApi.baseURL}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);


}

//SHow Weather Report
function showWeatherReport(weather){
    console.log(weather);
    
    //to show city and country 
    let city = document.getElementById("city")
    city.innerText = `${weather.name}, ${weather.sys.country}`;


    // to show temperature
    let temperature = document.getElementById("temp")
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;


    // to show Minimum and Maximum temperature
    let minMaxTemp = document.getElementById("min-max");
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;


    // to show type of weather
    let weatherType = document.getElementById("weather");
    weatherType.innerHTML = `${(weather.weather[0].main)}`;


    // to show date and day
    let date = document.getElementById("date");
    todayDate = new Date();
    date.innerText = dateManage(todayDate);


    // to change background image dynamically depending on that city weather
    
    if(weatherType.textContent == "Clear") 
    {
        document.body.style.backgroundImage = "url(./img/clear.jpg)";

    }

    else if (weatherType.textContent == "Sunny") 
    {
        document.body.style.backgroundImage = "url(./img/sunny.jpg)";

    }

    else if (weatherType.textContent == "Haze") {
        document.body.style.backgroundImage = "url(./img/haze.jpg)";
    }

    else if (weatherType.textContent == "Clouds") {
        document.body.style.backgroundImage = "url(./img/cloud.jpg)";
    }

    
    
    else if (weatherType.textContent == "Rain") {
        document.body.style.backgroundImage = "url(./img/rain.jpg)";
    }
    
    else if (weatherType.textContent == "Snow") {
        document.body.style.backgroundImage = "url(./img/snow.jpg)";
    }

    else if (weatherType.textContent == "Thunderstorm") {
        document.body.style.backgroundImage = "url(./img/thunderstorm.jpg)";
    }
    



}

//DAte manage

function dateManage(todayDateArg) {

    let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" ,
"Friday" , "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];


    let date = todayDateArg.getDate();
    let month = months[todayDateArg.getMonth()];
    let day = days[todayDateArg.getDay()];
    let year = todayDateArg.getFullYear();


    return `${date} ${month} (${day}), ${year}`; 


 



}



 

