fetch('../currencies.json')
    .then(response => {
        return response.json();
    })
    .then(jsondata => parser(jsondata));

function parser(jsondata) {

    const currencies = jsondata['currencies'];

    console.log(currencies);

    var list = []

    var elements = document.getElementsByClassName("currency-list");

    for (let index = 0; index < elements.length; index++) {
        for (var currencySymbol in currencies) {
            var currencyName = currencies[currencySymbol];
            var currency = currencySymbol + currencyName;
            var onclick = "onclick=changeButtonText(" + "'" + currencySymbol + "'" + "," + (index + 1) + ");";

            elements[index].innerHTML = elements[index].innerHTML +
                "<li><a class='dropdown-item py-1 my-0'" +
                onclick + ">" + currencySymbol + " - " + currencyName;
        }
    }
}

function changeButtonText(text, element) {
    document.getElementById("button" + element).innerHTML = text;
}