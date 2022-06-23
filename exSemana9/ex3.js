function ordenar() {
    var primeiroN =document.getElementById('primeiron').value;
    var segundoN = document.getElementById('segundon').value;
    var terceiroN = document.getElementById('terceiron').value;
    var nomes = [];

    nomes.push(primeiroN);
    nomes.push(segundoN);
    nomes.push(terceiroN);

    nomes.sort();
    console.log(primeiroN)

    document.getElementById('resultado').innerHTML = nomes[0] + ", " + nomes[1] + ", " + nomes[2] + "." 

}


