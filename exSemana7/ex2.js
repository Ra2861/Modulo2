function trocar(){
    var primeiro_campo = document.getElementById('Primeira').value;
    var segundo_campo = document.getElementById('Segunda').value;
    document.getElementById('Segunda').value = primeiro_campo;
    document.getElementById('Primeira').value = segundo_campo;
}