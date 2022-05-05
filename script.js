
function ex1() {
//mansagem de aviso
alert('Parabens você é muito bom em fisica');

//pegar o valor do form
var v0 = document.getElementById('v0').value;
const g = 10; // aceleracao gravitacional e 10 m/s^2

//formulas
altmaxima = v0^2/g*2
tsubida = v0/g; 

//o que aparece no html
document.getElementById('vem').innerHTML = "Tempo de subida = " + tsubida
console.log("Tempo de subida = " + tsubida)

document.getElementById('sobe').innerHTML = "Altura maxima =" + altmaxima
console.log("Altura maxima =" + altmaxima )

}