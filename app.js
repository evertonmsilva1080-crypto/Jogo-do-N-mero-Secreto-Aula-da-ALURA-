let listaDeNumerosSorteados = [];
let quantidadeDeNumeros = 100000;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    
    exibirTextoNaTela('h1', 'Jogo Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100000');
    
}

    exibirMensagemInicial ();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Parabéns você Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mesagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ('p', mesagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela ('h1', 'Está quase lá :)');
            exibirTextoNaTela ('p', 'Seu chute deve ser Maior');
        } else {
            exibirTextoNaTela ('h1', 'Está quase lá :)');
            exibirTextoNaTela ('p', 'Seu chute deve ser Menor');
        }
        tentativas++
        limparCampo ();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random() * quantidadeDeNumeros + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;

    if (quantidadeDeElementos == quantidadeDeNumeros){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else { 
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo ();
    tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

