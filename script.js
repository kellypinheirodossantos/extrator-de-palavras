const botaoMostraPalavras = document.querySelector("#botao-palavrachave");
botaoMostraPalavras.addEventListener("clik",botaoMostraPalavras);

function botaoMostraPalavras(){
    const texto = document.querySelector('entrada-de-texto');
    const camporesultado = document.querySelector('#resultado-plavrachave');
    const palavra = texto.split("")

    camporesultado.textContent = palavra.join("")
}