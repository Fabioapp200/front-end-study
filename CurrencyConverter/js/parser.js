var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const url = "https://api.getgeoapi.com/v2/currency/convert?api_key=f4d469f5612fbc93de8286b5517c7fd5b9531831&from=USD"; 
fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => parser(result))
    .catch(error => console.log('error', error));

function parser(jsondata) {
    jsondata = JSON.parse(jsondata);

    let elements = document.getElementsByClassName("currency-list");

    const cur = jsondata['rates'];
    const symbols = Object.keys(cur).sort();

    let dict = {};

    for (let i = 0; i < symbols.length; i++) {
        const element = symbols[i];
        const name = cur[element]['currency_name'];
        const rate = cur[element]['rate'];

        dict[element] = { name, rate };
    }

    for (let index = 0; index < elements.length; index++) {
        for (let currencySymbol in dict) {
            let currencyName = dict[currencySymbol]['name'];
            let rate = dict[currencySymbol]['rate'];
            let onclick = "onclick=changeButtonText(" + (index + 1) + "," + "'" + currencySymbol + "'" + "," + rate + ");";

            elements[index].innerHTML = elements[index].innerHTML +
                "<li><a class='dropdown-item py-1 my-0'" +
                onclick + ">" + currencySymbol + " - " + currencyName;
        }
    }
}

function changeButtonText(id, symbol, rate) {
    
    if(id == 1)
    {
        window.currentRate01 = rate;
        window.currentSymbol01 = symbol;
    }
    else
    {
        window.currentRate02 = rate;
        window.currentSymbol02 = symbol;
    }

    document.getElementById("button" + id).innerHTML = symbol;
}