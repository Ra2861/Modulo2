
function bubbleSort(arr) {
    //ar arr = [1,2,3,4,5,6,7,8,9];
var teste = document.getElementById('valor').value;
var arr = teste.split(",");
var numero = parseInt(document.getElementById('numero').value);
var tmp;
var posição;
console.log(arr);
        
            var length = arr.length;
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < (length - 1); j++) {
                    if (parseInt(arr[j]) > parseInt (arr[j + 1]) ) {
                        tmp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tmp;
                    }
                }
            }
            for (j=0; j <arr.length; j++){
                if(numero == arr [j]) {
                    posição = j+1;
                }

                
            }

            console.log(arr);
            document.getElementById('resultado').innerHTML= "a ordem é:" + arr;
            document.getElementById('posição').innerHTML= "A posição é:" + posição;
        }

    

        

        
