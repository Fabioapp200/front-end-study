var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.getgeoapi.com/v2/currency/convert?api_key=f4d469f5612fbc93de8286b5517c7fd5b9531831&from=BRL", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


import { writeFile } from 'fs';

// create a JSON object
const user = {
    "id": 1,
    "name": "John Doe",
    "age": 22
};

// convert JSON object to string
const data = JSON.stringify(user);

// write JSON string to a file
writeFile('user.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});