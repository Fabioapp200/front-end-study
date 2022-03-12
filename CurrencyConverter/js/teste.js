fetch('../currencies.json')
   .then(response => {
      return response.json();
   })
   .then(jsondata => parser(jsondata));

function parser(jsonData) {

   const currencies = jsonData['currencies'];

   var list = []

   for (var key in currencies) {
      var value = currencies[key];

      var s = key + " - " + value;

      list.push(
         document.getElementById("currency-list").innerHTML +
         '<li><a class="dropdown-item py-0 my-0" onclick="changeButtonText(' + "\'" + s +  "\'" + ');">' +
         key + " - " + value +
         '</a></li>'
      );

   }
   document.getElementById("currency-list").innerHTML = list;

}

function changeButtonText(text) {
   console.log(text);
   document.getElementById("button1").innerHTML = text;
}