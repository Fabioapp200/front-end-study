var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://api.getgeoapi.com/v2/ip/177.188.140.52?api_key=f4d469f5612fbc93de8286b5517c7fd5b9531831&format=json&filter=city&language=en", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


fetch('../location.json').then(response => {
    return response.json();
}).then(data => {
    parse(data);
}).catch(err => {
    alert('Something went wrong error: \n' + err);
});


function parse(jsondata) {
    let longitude = jsondata['location']['longitude'];
    let latitude = jsondata['location']['latitude'];

    console.log(longitude + " " + latitude);
}