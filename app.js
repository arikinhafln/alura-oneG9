/*let titulo = document.querySelector('h1'); 
titulo.innerHTML = 'Jogo do Número Secreto';*/

/*let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 e 10';*/

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 e 100');

function verificarChute() {
    let chute = documet
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}