
function inversao() {
    let texto = document.getElementById('inverseTxt').value;
    let resultadoInverso = document.getElementById('resultadoInversao');
    let splitString = texto.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    resultadoInverso.innerHTML = joinArray;
}

function copiarConteudo() {
    let conteudo = document.getElementById('resultadoInversao').innerHTML;
    let inputTemp = document.createElement("input");

    inputTemp.value = conteudo;

    document.body.appendChild(inputTemp);

    inputTemp.select();

    document.execCommand("copy");

    document.body.removeChild(inputTemp);
}