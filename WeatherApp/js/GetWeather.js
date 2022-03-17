function test() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let uriIP = "https://api.ipify.org/?format=json"

    var ip;
    fetch(uriIP, requestOptions)
        .then(response => response.json())
        .then(result => )
        .catch(error => console.log(error))

}

console.log(test());
/* 

uri = "https://api.getgeoapi.com/v2/ip/177.188.140.52?api_key=f4d469f5612fbc93de8286b5517c7fd5b9531831&format=json&filter=city&language=en";

fetch(uri, requestOptions)
    .then(response => response.text())
    .then(result => parse(result))
    .catch(error => console.log('error', error));

function parse(jsondata) {
    jsondata = JSON.parse(jsondata);
    let longitude = jsondata['location']['longitude'];
    let latitude = jsondata['location']['latitude'];

    console.log(longitude + " " + latitude);
} */