const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
const IPUri = "https://api.ipify.org/?format=json";

function getValues(data) {
    console.log(JSON.parse(data));
}

fetch(IPUri, requestOptions)
    .then(resp => resp.text())
    .then(function (res) {
        const ip = JSON.parse(res)['ip'];
        const api_key = "f4d469f5612fbc93de8286b5517c7fd5b9531831";
        const geoURL = `https://api.getgeoapi.com/v2/ip/${ip}?api_key=${api_key}`;
        fetch(geoURL, requestOptions)
            .then(resp => resp.text())
            .then(function (res) {
                jsondata = JSON.parse(res);
                const api_key = "a7b6c24e8b4e46c984193533bc467d14";
                const lon = jsondata['location']['longitude'];
                const lat = jsondata['location']['latitude'];
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
                fetch(url, requestOptions)
                    .then(resp => resp.text())
                    .then(getValues(res))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))