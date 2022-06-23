
/*function primos(num) {
    for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

var determinadoNumero = parseInt(document.getElementById('fim'));

for (var i = 2; i < determinadoNumero; i++) if (primos(i)) 

document.getElementById('resultado').innerHTML= "os numeros são" + (i);


*/

/*function primos() {
    var determinadoNumero = parseInt(document.getElementById('fim'));
    let i = 2; i < determinadoNumero; i++
    if (determinadoNumero % i === 0) {
        document.getElementById('resultado').innerHTML = "o numero não é primo"
    }

    else {
        document.getElementById('resultado').innerHTML = "os numero é primo"

    }

}
*/

/*function primeNumbers(num) {
    var determinadoNumero = parseInt(document.getElementById('fim'));
    let numbers = new Array();
    for (var i = 0; i <= num; i++) {
      if (primos(i)){
        numbers.push(determinadoNumero.value);
      }
    }
    return numbers;
  }
  function primos(num) {
    for(let i = 2; i <num; i++)
      if(num % i === 0) {
          return false
      };
    return num > 1;

  }*/
  //console.log(primeNumbers(13));

  function primos(){
    var comeco = document.getElementById('inicio').value;
    var limite = document.getElementById('fim').value;
    var nprimos = [];

    while(comeco <= limite){
        let primo = true;
        comeco++
        for(let divisor = 2; divisor < comeco; divisor++){
            if(comeco % divisor == 0){
                primo = false;
                break;    
            }    
        }

        if (primo){
            nprimos.push(comeco);
        } 

        document.getElementById('resultado').innerHTML = nprimos; 
    }
}
