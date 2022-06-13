function somaV() {
    var quantia = parseInt(document.getElementById('quantia').value);
    document.getElementById('quantia').value = quantia + 1;
}

function subtracaoV() {
    var quantia = parseInt(document.getElementById('quantia').value);
    document.getElementById('quantia').value = quantia - 1;
}