function modificador() {
    let modifica = document.getElementById('modTexto').value;
    let resultado = document.getElementById('modAplicado');
    resultado.innerHTML = modifica.toUpperCase();
}

function copiarConteudo() {
    let conteudo = document.getElementById('modAplicado').innerHTML;
    let inputTemp = document.createElement("input");

    inputTemp.value = conteudo;

    document.body.appendChild(inputTemp);

    inputTemp.select();

    document.execCommand("copy");

    document.body.removeChild(inputTemp);
}