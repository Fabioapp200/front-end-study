function inputWatch() {
    var min = document.getElementById("minInput").value;
    var max = document.getElementById("maxInput").value;

    min = parseInt(min);
    max = parseInt(max);

    if (!isNaN(min) && !isNaN(max)) {
        //Both inputs are valid
        if (min >= max) {
            alert("The maximum number must be lower than the mininum number.");
            document.getElementById("minInput").value = "";
            document.getElementById("maxInput").value = "";
        } else {
            Randomize(min, max);
        }
    } else {
        //One or both inputs are invalid
        alert("Both input fields should be filled in. Try again!");
    }
}
function Randomize(min, max) {
    const url =
        "https://www.random.org/integers/?num=1&min=" +
        min +
        "&max=" +
        max +
        "&col=1&base=10&format=plain&rnd=new";

    let loader = "<div class='loading'><div class='dot-typing'></div></div>";
    document.getElementById("banner").innerHTML = loader;
    fetch(url)
        .then((resp) => resp.text())
        .then(function record(result) {
            result = parseInt(result);
            document.getElementById("banner").innerHTML =
                "<p id='result'>" + "Result: " + result + "</p>";
        })
        .catch(function () {
            console.log("nao entrou");
        });
}
