const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';

const port = 3161;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = '/curriculo.db'; 

app.get(express.static("/curriculo"));

app.get(express.json());
function enviarDados() {
    let url = "/projetos";
 
    let xhttp = new XMLHttpRequest(); //método do HTML que permite que faça requisições por script
 
    xhttp.open("get", url, false) ; 
 
    xhttp.send(); //manda para o servidor 
    
    let data = JSON.parse(xhttp.responseText); //recebe o dado que retorna do xhttp 
    console.log(data[0]);
 
    $("#texto")[0].innerHTML = ''; //aqui tiramos todas as informações do array
 
    data.forEach(PROFISSIONAIS => {    //cada linha da tabela se torna uma linha 
       
       //acessa o 1º objeto da div que colocamos para exibir os profissionais  
       $("#texto")[0].innerHTML += `
          <tr> 
            <td> 
			<td> ${projetos.nome} </td>
            <td> ${projetos.descrição} </td>
          </tr>             
       `
    });
}

app.listen(port,hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});
