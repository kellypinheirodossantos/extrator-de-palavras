import { PALAVRAS_RUINS } from "./PalavrasRuins";

const botaoMostraPalavras = document.querySelector("#botao-palavrachave");
botaoMostraPalavras.addEventListener("clik",botaoMostraPalavras);

function botaoMostraPalavras(){
    const texto = document.querySelector('entrada-de-texto');
    const camporesultado = document.querySelector('#resultado-plavrachave');
    const palavra = texto.split("")

    camporesultado.textContent = palavra.join("")
}
function processaTexto (texto){
    let palavra = texto.split(/\P{L}+/u);
    const frequncia = contaFrequencia(palavras)
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavras)

    function ordenaPalavras(p1,p2){
        return frequencias [p2]-frequencias[p1];
    }

    console.log(ordenadas);
    return ordenadas.slice(0,10);
}

function contaFrequencias(palavras){
 let frequencias = {};
   for (let i of palavras){
    frequencias[i] = 0;
     for(let j of palavras){
         if (i==j) { 
            frequencias[i]++;
            }
        }

    }

}

    return palavras;
    


function tiraPalavras(palavras){
    const palavrasBoas=[];
    for (let palavra of palavras){
        if (!PALAVRAS_RUINS.has(palavra)&& palavra.length>2){
            palavrasBoas.push(palavras);
        }
    }

    return palavrasBoas;
}