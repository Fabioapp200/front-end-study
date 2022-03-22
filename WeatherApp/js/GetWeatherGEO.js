function getValues(data) {
    data = JSON.parse(data);

    //Parse Icon
    let icon = data["weather"][0]["icon"];
    icon = `http://openweathermap.org/img/wn/${icon}@4x.png`;

    //Parse location
    const cityName = data["name"];
    const countryName = data["sys"]["country"]

    //Parse temperature
    const maxTemp = KtoC(data["main"]["temp_max"]);
    const minTemp = KtoC(data["main"]["temp_min"]);
    const temp = KtoC(data["main"]["temp"]);
    const feelsLike = KtoC(data["main"]["feels_like"]);

    //Parse wind
    const speed = data["wind"]["speed"].toFixed(0);
    const deg = data["wind"]["deg"].toFixed(0);

    //Set values to elements
    document.getElementById("currentTempText").innerHTML = temp + "°C";
    document.getElementById("feelsLikeText").innerHTML = "Feels like " + feelsLike + "°C";
    document.getElementById("maxTempText").innerHTML = "Max: " + maxTemp + "°C ";
    document.getElementById("minTempText").innerHTML = "Min: " + minTemp + "°C ";
    document.getElementById("weatherIcon").innerHTML = `<img src="${icon}">`;
    document.getElementById("locationText").innerHTML = cityName + "/" + countryName;

    //Set favicon to current weather
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = icon;
}

function KtoC(tempInK){
    return (tempInK - 273.15).toFixed(0)
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Enable geolocation and refresh this page.");
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    getWeatherData(lat, lon);
}

function getWeatherData(lat, lon) {
    const api_key = "a7b6c24e8b4e46c984193533bc467d14";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    fetch(url)
        .then(resp => resp.text())
        .then(res => getValues(res))
        .catch(err => console.log(err))
}

getLocation();