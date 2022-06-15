
function desconto() {
    var pnumero = parseInt(document.getElementById('pessoas').value);
    var etinerario = document.getElementById('hora');
    var diurno = document.getElementById('diurno');
    var noturno = document.getElementById('noturno');


    if (etinerario = diurno && pnumero > 50)
        document.getElementById('resultado').innerHTML = pnumero * 160 + " Reais por pessoa "


    else (etinerario = diurno)
    document.getElementById('resultado').innerHTML = pnumero * 200 + " Reais por pessoa"


    if (etinerario = noturno && pnumero > 50)
        document.getElementById('resultado').innerHTML = pnumero * 250 + " Reais por pessoa"


    else (etinerario = noturno)
    document.getElementById('resultado').innerHTML = pnumero * 500 + " Reais por pessoa"





}




/*function somaV() {
    var quantia = parseInt(document.getElementById('quantia').value);
    document.getElementById('quantia').value = quantia + 1;
}*/

