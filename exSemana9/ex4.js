function gerar() { 

    var limite= document.getElementById('limite').value;
    var n = new Array;
    var cont;
    n[0] = 1;
    n[1] = 1;
    console.log("teste"+limite);
    for(cont = 2; cont < limite; cont++) {
  
      n[cont] = n[cont - 1] + n[cont - 2];
console.log("teste "+n[cont]);      

    }
    
        
    document.getElementById('resultado').innerHTML = "a sequência é " + n;

 }

 