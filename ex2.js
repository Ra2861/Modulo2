function caixa(){
    //pegar o valor do form usando o id 
    var total= document.getElementById('valor').value;
    var notas;
    var notas= valor/10 
    notas= parseInt(total/10)
    document.getElementById('aparece').innerHTML = ''

//pegar notas de 10 somente a parte inteira

    //devolvendo o resultado pro html
    document .getElementById('aparece').innerHTML +='notas de 10:'+ notas;
    if(total>=10){
    notas=parseInt(notas/5)
    document .getElementById('aparece').innerHTML +='<br>notas de 5:'+ notas;
    }


    else notas= total

    if(notas>=5) notas= total % 5
    else notas= total
    
    if(notas>=1) notas= total % 1
        notas =parseInt(notas/1) 
        document .getElementById('aparece').innerHTML +='<br>notas de 1:'+ notas;


    console.log(total);
    
    
}