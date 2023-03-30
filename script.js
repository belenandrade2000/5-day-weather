
var cityUrl = "http://api.openweathermap.org/geo/1.0/direct?q=cancun&appid=a8aad994de826937e53a4f435e492ae4"
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=21.1617854&lon=-86.8510468&units=imperial&cnt=1&appid=a8aad994de826937e53a4f435e492ae4"

var searchButton = document.querySelector("#weatherbtn")
var input = document.querySelector("#city-input");
// gives today's date using dayjs
var today = dayjs();
$("#date").text(today.format('MMM D, YYYY'));
console.log(today)

// getting latitude and longitude parameters
// function getCityParams() {
//     var searchParamsArr = document.location.search.split("&");
//     var city=searchParamsArr[0].split("=").pop()
//     searchApi(city);
// }

function searchApi(){
    var locCityUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+input.value+"&appid=a8aad994de826937e53a4f435e492ae4"

    fetch(locCityUrl)
        .then(function (response) {
        return response.json();
})
    .then(function (data) {
    
var lat = document.createElement('h3');
var lon = document.createElement('h3');

    console.log(data);
    lat.textContent = data[0].lat;
    lon.textContent = data[0].lon;
    console.log(lat);
    console.log(lon)
weatherAPI(data[0].lat,data[0].lon)

})
};

// getting weather parameters
function getWeatherParams() {
    var searchParamsArr = document.location.search.split("&");
    var lat = searchParamsArr[0].split("=").pop()
    var lon = searchParamsArr[1].split ("=").pop()
    weatherAPI(lat,lon)
}

function weatherAPI(lat,lon) {
    var cityWeatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon="+ lon + "&units=imperial&appid=a8aad994de826937e53a4f435e492ae4"
    fetch(cityWeatherUrl)
    .then(function (response) {
        return response.json();
})
    .then(function (data) {
        console.log(data)
        var temp = document.append(".temp")
        var wind = document.append(".wind")
        var humidity = document.append(".humidity")

        temp.textContent = data.temp;
        wind.textContent = data.wind;
        humidity.textContent = data.humidity;
})}
  
// search button function
function handleSearchButton (event) {
    event.preventDefault();

    var cityInput = document.querySelector("input").value;

    searchApi(cityInput);
}

searchButton.addEventListener("click",handleSearchButton)

//getParams();