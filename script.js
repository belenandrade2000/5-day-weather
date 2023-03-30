
var cityUrl = "http://api.openweathermap.org/geo/1.0/direct?q=cancun&appid=a8aad994de826937e53a4f435e492ae4"
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=21.1617854&lon=-86.8510468&units=imperial&appid=a8aad994de826937e53a4f435e492ae4"

var searchButton = document.querySelector(".search-bar")
var today = dayjs();
$("#date").text(today.format('MMM D, YYYY'));
console.log(today)


function getParams() {
    var searchParamsArr = document.location.search.split("&");
    var city=searchParamsArr[0].split("=").pop()
    searchApi(city);
}

function searchApi(city){
    var locCityUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&appid=a8aad994de826937e53a4f435e492ae4"

    fetch(locCityUrl)
        .then(function (response) {
        return response.json();
})
    .then(function (data) {
    //Using console.log to examine the data
var latitude = document.createElement('h3');
var longitude = document.createElement('h3');

    console.log(data);
    latitude.textContent = data.lat;
    longitude.textContent = data.lon;
    console.log(latitude);
    console.log(longitude)

})
};




    // //Setting the text of the h3 element and p element.
    // userName.textContent = data[i].login;
    // userUrl.textContent = data[i].url;

    // //Appending the dynamically generated html to the div associated with the id="users"
    // //Append will attach the element as the bottom most child.
    // usersContainer.append(userName);
    // usersContainer.append(userUrl);
function handleSearchButton (event) {
    event.preventDefault();

    var cityInput = document.querySelector("input").value;

    searchApi(cityInput);
}

searchButton.addEventListener("submit",handleSearchButton)

getParams();