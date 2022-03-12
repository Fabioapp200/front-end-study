fetch('../currencies.json')
   .then(response => {
      return response.json();
   })
   .then(jsondata => parser(jsondata));

function parser(jsondata) {

   const currencies = jsondata['currencies'];

   var list = []

   var elements = document.getElementsByClassName("currency-list");

   /* for (var key in currencies) {
      var value = currencies[key];

      var s = key + " - " + value;

      list.push(
         elements[index].innerHTML +
         '<li><a class="dropdown-item py-0 my-0" onclick="changeButtonText(' + "\'" + s +  "\'" + ', '+ index +');">' +
         key + " - " + value +
         '</a></li>'
      );
   } */

   for (let index = 0; index < elements.length; index++) {
      for (var currencySymbol in currencies) {
         var currencyName = currencies[currencySymbol];
         var currency = "\'" + currencySymbol + " - " + currencyName + "\'";
         console.log(currency);
         var onclick = "onclick=changeButtonText(' + currency + ');";

         elements[index].innerHTML = elements[index].innerHTML + 
         "<li><a class='dropdown-item py-0 my-0'" + 
         onclick + ">" + currencySymbol + " - " + currencyName;
      }
   }
   /* console.log(jsondata);

   for (var key in currencies) {
      var value = currencies[key];

      var s = key + " - " + value;

      //console.log(value);  

      list.push(
         document.getElementById("currency-list").innerHTML +
         '<li><a class="dropdown-item py-0 my-0" onclick="changeButtonText(' + "\'" + s +  "\'" + ');">' +
         key + " - " + value +
         '</a></li>'
      );
   }
   document.getElementById("currency-list-1").innerHTML = list;
   document.getElementById("currency-list-2").innerHTML = list; */
}

function changeButtonText(text, element) {
   console.log(element);
   document.getElementById("button" + element).innerHTML = text;
}