function convert() {
    let input01 = document.getElementById("input1");
    let input02 = document.getElementById("input2");
    let button01 = document.getElementById("button1");
    let button02 = document.getElementById("button2");
    let resultField = document.getElementById("resultField");
    let value01 = parseFloat(input01.value);
    let value02 = parseFloat(input02.value);
    let rate01 = window.currentRate01;
    let rate02 = window.currentRate02;
    let symbol01 = window.currentSymbol01;
    let symbol02 = window.currentSymbol02;

    console.log(button01.innerHTML);
    if (button01.innerHTML == "Pick Currency" || button02.innerHTML == "Pick Currency") {
        alert("Something went wrong. Make sure to have selected both currencies and at least one amount.");
    }
    else {
        if (input01.value != "") {
            //console.log(value01 * (rate02 / rate01).toFixed(2)); Converts value 1 to value 2
            let result = (value01 * (rate02 / rate01)).toFixed(2);
            resultField.innerHTML = `${value01} ${symbol01} is equal to ${result} ${symbol02}`;
        }
        else if (input02.value != "") {
            //console.log(value02 * (rate01 / rate02).toFixed(2)); Converts value 2 to value 1 
            let result = (value02 * (rate01 / rate02)).toFixed(2);
            resultField.innerHTML = `${value02} ${symbol02} is equal to ${result} ${symbol01}`;
        }
        else {
            alert("Something went wrong. Make sure to have selected both currencies and at least one amount.");
        }
    }
}

function switchInputs() {
    let input01 = document.getElementById("input1");
    let input02 = document.getElementById("input2");
    let a = input01.value;

    input01.value = input02.value;
    input02.value = a;
}