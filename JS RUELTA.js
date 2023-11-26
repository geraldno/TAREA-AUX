function calcularCombinaciones() {
    var n = parseInt(document.getElementById("totalObjects").value);
    var r = parseInt(document.getElementById("selectedObjects").value);

    if (r > n) {
        alert("El número de objetos seleccionados no puede ser mayor que el número total de objetos.");
        return;
    }

    var factorialN = calcularFactorial(n);
    var factorialR = calcularFactorial(r);
    var factorialNR = calcularFactorial(n - r);

    var combinaciones = factorialN / (factorialR * factorialNR);

    document.getElementById("result").innerHTML = "<p>El número aleatorio es: " + combinaciones + "</p>";
    document.getElementById("result").style.display = "block";
}

function calcularFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calcularFactorial(num - 1);
    }
}