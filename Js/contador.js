
caracteres.innerHTML = 0;
palavras.innerHTML = 0;
linhas.innerHTML = 0;

function countWords() {
    let text = document.getElementById('texto').value;
    document.getElementById('caracteres').innerHTML = text.length;
    document.getElementById('palavras').innerHTML = text.split(/\s+/).length;
    document.getElementById('linhas').innerHTML = text.split(/\n/).length;
}