function convert() {
    input01 = document.getElementById("input1");
    input02 = document.getElementById("input2");
    button01 = document.getElementById("button1");
    button02 = document.getElementById("button2");
    resultField = document.getElementById("resultField");
    value01 = parseFloat(input01.value);
    value02 = parseFloat(input02.value);
    rate01 = window.currentRate01;
    rate02 = window.currentRate02;
    symbol01 = window.currentSymbol01;
    symbol02 = window.currentSymbol02;

    //let sentence = `${value01} ${symbol01} is equal to ${b} ${symbol02}`;
    let sentence = "";

    /* console.log("Field 01: " + a + "\t" + "Field 02: " + b);
    console.log(value01 * (rate02 / rate01).toFixed(2)); //To convert value01 to value02
    console.log(value02 * (rate01 / rate02).toFixed(2)); //To convert value02 to value01 
 */
    console.log(button01.innerHTML);
    if (button01.innerHTML == "Pick Currency" || button01.innerHTML == "Pick Currency") {
        console.log('macaco4');
    }
    else{   
        if (input01.value != "") {
            console.log(value01 * (rate02 / rate01).toFixed(2));
            var result = (value01 * (rate02 / rate01)).toFixed(2);
            resultField.innerHTML = `${value01} ${symbol01} is equal to ${result} ${symbol02}`;
        }
        else if (input02.value != "") {
            console.log(value02 * (rate01 / rate02).toFixed(2));
            var result = (value02 * (rate01 / rate02)).toFixed(2);
            resultField.innerHTML = `${value02} ${symbol02} is equal to ${result} ${symbol01}`;
    
        }
        else {
            console.log('macaco3');
    
        }
    }
}