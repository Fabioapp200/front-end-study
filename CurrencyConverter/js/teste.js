fetch('../currencies.json')
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));

function parse(jsonData){
    
}