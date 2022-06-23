function somar() {
    var centena = document.getElementById('centena').value;
    var numero = centena;
var numeros = [];
var resto, soma = 0 ;
    for (var i = 0; i < centena.length; i++) {
        resto = numero % 10
        numeros.push(resto.value)
        //var nSeparados = numeros.split(" ")
        //sum += nSeparados
         numero = parseInt(numero/10);
         soma += resto;
    }
    document.getElementById('resultado').innerHTML = "a soma é "+ soma;
    //console.log(soma);
}

