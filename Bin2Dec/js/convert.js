function convertValues() {
    var binValue = document.getElementById("binInput").value;
    var decValue = document.getElementById("decInput").value;

    newDecimalValue = (decValue >>> 0).toString(2); //Decimal to Binary conversion output
    newBinaryValue = parseInt(binValue, 2); //Binary to Decimal conversion output

    //console.log("Binary: " + newBinaryValue + "\n" + "Decimal: " + newDecimalValue);

    if (/[^01]/.test(binValue)) {
        //alerts the user about forbidden characters on the binary field
        alert("Binary input should only contain 0 and/or 1.")
        document.getElementById("decInput").value = "";
        document.getElementById("binInput").value = "";
    }
    else if (/[^0-9]/.test(decValue)) {
        //alerts the user about forbidden characters on the decimal field
        alert("Decimal input should only contain numbers.")
        document.getElementById("binInput").value = "";
        document.getElementById("decInput").value = "";
    }
    else if (decValue == "" && binValue != "") {
        // Converts Binary to Decimal
        document.getElementById("decOutput").innerHTML = "Decimal: " + newBinaryValue;
        document.getElementById("binOutput").innerHTML = "Binary: " + binValue;
        document.getElementById("binInput").value = "";
    }
    else if (binValue == "" && decValue != "") {
        // Converts Decimal to Binary
        document.getElementById("decOutput").innerHTML = "Decimal: " + decValue;
        document.getElementById("binOutput").innerHTML = "Binary: " + newDecimalValue;
        document.getElementById("decInput").value = "";
    }

}