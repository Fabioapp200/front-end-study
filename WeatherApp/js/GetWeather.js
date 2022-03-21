////////////////////////////////////////////////////////////////////////////////////////
//Processing Data

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  window.lat = position.coords.latitude;
  window.lon = position.coords.longitude;
}
getLocation();

function getValues(data, cityName, countryName) {
    data = JSON.parse(data);

    //Parse Icon
    let icon = data["weather"][0]["icon"];
    icon = `http://openweathermap.org/img/wn/${icon}@4x.png`;

    //Parse temperature
    const maxTemp = (data["main"]["temp_max"] - 273.15).toFixed(0);
    const minTemp = (data["main"]["temp_min"] - 273.15).toFixed(0);
    const temp = (data["main"]["temp"] - 273.15).toFixed(0);
    const feelsLike = (data["main"]["feels_like"] - 273.15).toFixed(0);
    const humidity = (data["main"]["humidity"] - 273.15).toFixed(0);

    //Parse wind
    const speed = data["wind"]["speed"].toFixed(0);
    const deg = data["wind"]["deg"].toFixed(0);

    //console.log(maxTemp, minTemp, temp, feels_like, humidity, speed, deg);

    document.getElementById("currentTempText").innerHTML = temp + "°C";
    document.getElementById("feelsLikeText").innerHTML = "Feels like " + feelsLike + "°C";
    document.getElementById("maxTempText").innerHTML = "Max: " + maxTemp + "°C ";
    document.getElementById("minTempText").innerHTML = "Min: " + minTemp + "°C ";
    document.getElementById("weatherIcon").innerHTML = `<img src="${icon}">`;
    document.getElementById("locationText").innerHTML = cityName + "/" + countryName;


    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = icon;
}

////////////////////////////////////////////////////////////////////////////////////////
//Requesting Data

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const IPUri = "https://api.ipify.org/?format=json";

fetch(IPUri, requestOptions)
    .then(resp1 => resp1.text())
    .then(function (res1) {
        const ip = JSON.parse(res1)['ip'];
        const api_key = "f4d469f5612fbc93de8286b5517c7fd5b9531831";
        const geoURL = `https://api.getgeoapi.com/v2/ip/${ip}?api_key=${api_key}`;
        fetch(geoURL, requestOptions)
            .then(resp2 => resp2.text())
            .then(function (res2) {
                jsondata = JSON.parse(res2);
                const api_key = "a7b6c24e8b4e46c984193533bc467d14";
                let lat = jsondata['location']['latitude'];
                let lon = jsondata['location']['longitude'];
                lat = window.lat;
                lon = window.lon;
                console.log(lat, lon);
                const cityName = jsondata["city"]["name"];
                const countryName = jsondata["country"]["name"];
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
                fetch(url, requestOptions)
                    .then(resp3 => resp3.text())
                    .then(res3 => getValues(res3, cityName, countryName))
                    .catch(err3 => console.log(err3))
            })
            .catch(err2 => console.log(err2))
    })
    .catch(err1 => console.log(err1))