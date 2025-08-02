/*let titulo = document.querySelector('h1'); 
titulo.innerHTML = 'Jogo do Número Secreto';*/

/*let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 e 10';*/
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentaivas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilain Portuguese Female', {rate:1.2})
}
function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 e 100');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = documet
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}