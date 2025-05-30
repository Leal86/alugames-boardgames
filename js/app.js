let jogosAlugados = 0; 

function listaDeAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`)
}

/*Altera status do jogo de Alugar para Devolver ou de Devolver para Alugar, 
    com mensagem de confirmação na devolução e adiciona ou remove quantidade
    de jogos que é impresso no console */
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name')
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados-= jogosAlugados + 1;
        } 
    } else {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            jogosAlugados+= 1; 
        }
    listaDeAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    listaDeAlugados();
});

//Função que verifica se é um palindromo com function declaration (aceita hoisting) 
essaPalavraEUmpalindromo1();
function essaPalavraEUmpalindromo1() {
    let palavra = "rever";
    let separandoAsLetrasDaPalavra = palavra.split("");
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    console.log(separandoAsLetrasDaPalavra);
    palavraInvertida = palavraInvertida.join("");

    if (palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo!`)
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo!`)
    }
    
}

//Função que verifica se é um palindromo com function expression (não aceita hoisting)
const essaPalavraEUmpalindromo = function(palavra) {
    let separandoAsLetrasDaPalavra = palavra.split("");
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    console.log(separandoAsLetrasDaPalavra);
    palavraInvertida = palavraInvertida.join("");

    if (palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo!`)
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo!`)
    }
    
}
essaPalavraEUmpalindromo("palavra");

// Função que ordena números em ordem crescente
function numeroCrescente() {
    let lista = [3,2,1];
    lista.sort((a, b) => a - b);
    console.log(`Ordem crescente ${lista}`)
}

numeroCrescente();

function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso:
ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"
