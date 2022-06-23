function parouimpar() {
    var centena = document.getElementById('centena').value;
    var total = centena / 2

    if (centena % 2 == 0) {
        document.getElementById('resultado').innerHTML = centena + " seu numero é par"
    }
    else {
        document.getElementById('resultado').innerHTML = centena + " seu numero é impar"
    }

}