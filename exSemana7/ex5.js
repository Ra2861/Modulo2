function nota() {
    var quant = parseInt(document.getElementById('quant de alunos').value);
    var numero = parseInt(document.getElementById('numero').value);
    var prova = parseInt(document.getElementById('prova').value);
    var trabalho = parseInt(document.getElementById('trabalho').value)

    document.getElementById('mTurma') = "a média da turma é" + prova+trabalho/quant 

    



}