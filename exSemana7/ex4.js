function desconto(){
    var pnumero = parseInt(document.getElementById('pessoas').value);
    var etinerario = document.getElementById('hora');

    if (etinerario == diurno ) {
        document.getElementById('resultado') = 200 +"Reais por pessoa"
        
    }

    if (etinerario == diurno && pnumero >= 50 ){
        document.getElementById('resultado') = 160 +"Reais por pessoa"

    }

    if ( etinerario== noturno) {
        document.getElementById('resultado') = 500 +"Reais por pessoa, desconto de 40%"
    }

    if (etinerario == noturno && pnumero >= 50 ){
        document.getElementById('resultado') = 250 +"Reais por pessoa, desconto de 50%"

    }



}