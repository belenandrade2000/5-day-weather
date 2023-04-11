
var cityUrl = "https://api.openweathermap.org/geo/1.0/direct?q=cancun&appid=a8aad994de826937e53a4f435e492ae4"
var currentWeather = "https://api.openweathermap.org/data/2.5/weather?lat=21.1617854&lon=-86.8510468&units=imperial&appid=a8aad994de826937e53a4f435e492ae4"
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=21.1617854&lon=-86.8510468&units=imperial&appid=a8aad994de826937e53a4f435e492ae4"

var searchButton = document.querySelector("#weatherbtn")
var input = document.querySelector("#city-input");

// gives today's date using dayjs
var today = dayjs();
$("#date").text(today.format('MMM D, YYYY'));
console.log(today)

const b = today.add(1, 'day')
$("#day-1").text(b.format('MMM D, YYYY'));

const c = today.add(2, 'day')
$("#day-2").text(c.format('MMM D, YYYY'));

const d = today.add(3, 'day')
$("#day-3").text(d.format('MMM D, YYYY'));

const e = today.add(4, 'day')
$("#day-4").text(e.format('MMM D, YYYY'));

const f = today.add(5, 'day')
$("#day-5").text(f.format('MMM D, YYYY'));

function searchApi(cityName){
    var locCityUrl = "https://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&appid=a8aad994de826937e53a4f435e492ae4"

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

        

        document.querySelector(".day-1").innerHTML="";
        document.querySelector(".day-2").innerHTML="";
        document.querySelector(".day-3").innerHTML="";
        document.querySelector(".day-4").innerHTML="";
        document.querySelector(".day-5").innerHTML="";

        const b = today.add(1, 'day')
        $(".day-1").text(b.format('MMM D, YYYY'));
        
        const c = today.add(2, 'day')
        $(".day-2").text(c.format('MMM D, YYYY'));
        
        const d = today.add(3, 'day')
        $(".day-3").text(d.format('MMM D, YYYY'));
        
        const e = today.add(4, 'day')
        $(".day-4").text(e.format('MMM D, YYYY'));
        
        const f = today.add(5, 'day')
        $(".day-5").text(f.format('MMM D, YYYY'));


        
        //temperature
        var temp1 = document.createElement("div")
        temp1.textContent=("Temperature: "+ data.list[0].main.temp+"°F");
        console.log(temp1)

        var temp2 = document.createElement("div")
        temp2.textContent=("Temperature: "+ data.list[8].main.temp+"°F");
        console.log(temp2)

        var temp3 = document.createElement("div")
        temp3.textContent=("Temperature: "+ data.list[16].main.temp+"°F");
        console.log(temp3)

        var temp4 = document.createElement("div")
        temp4.textContent=("Temperature: "+ data.list[24].main.temp+"°F");
        console.log(temp4)

        var temp5 = document.createElement("div")
        temp5.textContent=("Temperature: "+ data.list[32].main.temp+"°F");
        console.log(temp5)
        
        document.querySelector(".day-1").append(temp1);
        document.querySelector(".day-2").append(temp2);
        document.querySelector(".day-3").append(temp3);
        document.querySelector(".day-4").append(temp4);
        document.querySelector(".day-5").append(temp5);

        // icon

        var icon1 = document.createElement("img");
        icon1.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon +"@2x.png")

        var icon2 = document.createElement("img");
        icon2.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[8].weather[0].icon +"@2x.png")

        var icon3 = document.createElement("img");
        icon3.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[16].weather[0].icon +"@2x.png")

        var icon4 = document.createElement("img");
        icon4.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[24].weather[0].icon +"@2x.png")

        var icon5 = document.createElement("img");
        icon5.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[32].weather[0].icon +"@2x.png")

        document.querySelector(".day-1").append(icon1);
        document.querySelector(".day-2").append(icon2);
        document.querySelector(".day-3").append(icon3);
        document.querySelector(".day-4").append(icon4);
        document.querySelector(".day-5").append(icon5);

        // wind
        var wind1 = document.createElement("div")
        wind1.textContent=("Wind: "+data.list[0].wind.speed+"mph");
        console.log(wind1)

        var wind2 = document.createElement("div")
        wind2.textContent=("Wind: "+data.list[8].wind.speed+"mph");
        console.log(wind2)

        var wind3 = document.createElement("div")
        wind3.textContent=("Wind: "+data.list[16].wind.speed+"mph");
        console.log(wind3)

        var wind4 = document.createElement("div")
        wind4.textContent=("Wind: "+data.list[24].wind.speed+"mph");
        console.log(wind4)

        var wind5 = document.createElement("div")
        wind5.textContent=("Wind: "+data.list[32].wind.speed+"mph");
        console.log(wind5)

        document.querySelector(".day-1").append(wind1);
        document.querySelector(".day-2").append(wind2);
        document.querySelector(".day-3").append(wind3);
        document.querySelector(".day-4").append(wind4);
        document.querySelector(".day-5").append(wind5);

        //humidity
        var humidity1 = document.createElement("div")
        humidity1.textContent=("Humidity: "+data.list[0].main.humidity+"%");
        console.log(humidity1)

        var humidity2 = document.createElement("div")
        humidity2.textContent=("Humidity: "+data.list[8].main.humidity+"%");
        console.log(humidity2)

        var humidity3 = document.createElement("div")
        humidity3.textContent=("Humidity: "+data.list[16].main.humidity+"%");
        console.log(humidity3)

        var humidity4 = document.createElement("div")
        humidity4.textContent=("Humidity: "+data.list[24].main.humidity+"%");
        console.log(humidity4)

        var humidity5 = document.createElement("div")
        humidity5.textContent=("Humidity: "+data.list[32].main.humidity+"%");
        console.log(humidity5)

      


        document.querySelector(".day-1").append(humidity1 );
        document.querySelector(".day-2").append(humidity2);
        document.querySelector(".day-3").append(humidity3);
        document.querySelector(".day-4").append(humidity4);
        document.querySelector(".day-5").append(humidity5);

  

})
    fetch ("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon="+ lon + "&units=imperial&appid=a8aad994de826937e53a4f435e492ae4")
    .then(function (response) {
        return response.json();
})
    .then(function (data) {
        console.log(data)
        document.querySelector(".city").innerHTML="";

        var icon = document.createElement("img");
        icon.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png")

        var cityName = document.createElement("div")
        cityName.textContent=(data.name +" "+ today.format('MMM D, YYYY'));
        console.log(cityName)

        var currentTemp = document.createElement("div")
        currentTemp.textContent=("Temperature: "+ data.main.temp+"°F");
        console.log(currentTemp)

        var currentWind = document.createElement("div")
        currentWind.textContent=("Wind: "+data.wind.speed+"mph");
        console.log(currentWind)

        var humidity6 = document.createElement("div")
        humidity6.textContent=("Humidity: "+data.main.humidity+"%");
        console.log(humidity6)


        document.querySelector(".city").append(cityName);
        document.querySelector(".city").append(icon);
        document.querySelector(".city").append(currentTemp);
        document.querySelector(".city").append(currentWind);
        document.querySelector(".city").append(humidity6);
    })

} 

// search button function
function handleSearchButton (event) {
    event.preventDefault();

    var cityInput = document.querySelector("input").value;

    searchApi(cityInput);
    saveToLocalStorage(cityInput)
}

    function saveToLocalStorage (cityName) {
        var searchHistory = [];

        var storageContent = JSON.parse(localStorage.getItem("citysearch"));
        searchHistory.push(cityName);

        if (storageContent) {
            for(var i = 0; i  < storageContent.length; i++) {
                searchHistory.push(storageContent[i])
            }   
        } 
        localStorage.setItem("citysearch",JSON.stringify(searchHistory))

        var cityHistory = document.createElement("button")
        cityHistory.setAttribute("class", "btn btn-primary");

        var capCityName = cityName.charAt(0).toUpperCase() +cityName.slice(1)

        cityHistory.textContent = capCityName
        document.querySelector(".city-buttons").append(cityHistory)

        cityHistory.addEventListener("click",function(){
            searchApi(cityHistory.textContent);
        })
    }



searchButton.addEventListener("click",handleSearchButton)

