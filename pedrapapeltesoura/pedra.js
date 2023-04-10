//uma constante recebe o valor do id no html
const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");

//calculo da pedra
function calculapedra() {
    //cada variável recebe o valor do id do html
    var adversario = document.getElementById('adversario');
    var resultado = document.getElementById('resultado');
    var vitorias = document.getElementById('vitorias');
    var empates = document.getElementById('empates');
    var derrotas = document.getElementById('derrotas');
    //essa variável recebe um valor aleatório de 1 até 3
    var computador = parseInt(Math.random() * 3 + 1);
    //mostrando a imagem da pedra
    jogador.innerHTML = '<img style="border-style:solid;" src="pedra.jpg" alt="pedra">';

    //para cada condição, o objeto do jogo vai ser associado a um numero da variavel computador, 
    //entao, vai ser mostrado a imagem correspondente e vai adicionar uma contagem se for vitoria, empate ou derrota. 
    if (computador == 1) {
        adversario.innerHTML = '<img style="border-style:solid;" src="tesoura.jpg" alt="tesoura";>';
        let qtdvitorias = parseInt(vitorias.textContent) + 1;
        vitorias.textContent = qtdvitorias;
        resultado.innerHTML = '<img style="border-style:solid;"  src="vitoria.jpg" alt="vitoria">';
    } else if (computador == 2) {
        adversario.innerHTML = '<img style="border-style:solid;" src="pedra.jpg" alt="pedra";>';
        let qtdempates = parseInt(empates.textContent) + 1;
        empates.textContent = qtdempates;
        resultado.innerHTML = '<img style="border-style:solid;" src="empate.jpg" alt="empate">';
    } else if (computador == 3) {
        adversario.innerHTML = '<img style="border-style:solid;"  src="papel.jpg" alt="papel">';
        let qtdderrotas = parseInt(derrotas.textContent) + 1;
        derrotas.textContent = qtdderrotas;
        resultado.innerHTML = '<img style="border-style:solid;" src="derrota.jpg" alt="derrota">';
    }

}
//calculo papel
function calculapapel() {
    var adversario = document.getElementById('adversario');
    var resultado = document.getElementById('resultado');
    var vitorias = document.getElementById('vitorias');
    var empates = document.getElementById('empates');
    var derrotas = document.getElementById('derrotas');

    var computador = parseInt(Math.random() * 3 + 1);

    jogador.innerHTML = '<img style="border-style:solid;" src="papel.jpg" alt="papel">'

    if (computador == 1) {
        adversario.innerHTML = '<img style="border-style:solid;" src="pedra.jpg" alt="pedra";>';
        let qtdvitorias = parseInt(vitorias.textContent) + 1;
        vitorias.textContent = qtdvitorias;
        resultado.innerHTML = '<img style="border-style:solid;" src="vitoria.jpg" alt="vitoria">';
    } else if (computador == 2) {
        adversario.innerHTML = '<img style="border-style:solid;" src="papel.jpg" alt="papel";>';
        let qtdempates = parseInt(empates.textContent) + 1;
        empates.textContent = qtdempates;
        resultado.innerHTML = '<img style="border-style:solid;" src="empate.jpg" alt="empate">';
    } else if (computador == 3) {
        adversario.innerHTML = '<img style="border-style:solid;" src="tesoura.jpg" alt="tesoura">';
        let qtdderrotas = parseInt(derrotas.textContent) + 1;
        derrotas.textContent = qtdderrotas;
        resultado.innerHTML = '<img style="border-style:solid;" src="derrota.jpg" alt="derrota">';
    }

}

//calculo tesoura
function calculatesoura() {

    var adversario = document.getElementById('adversario');
    var resultado = document.getElementById('resultado');
    var vitorias = document.getElementById('vitorias');
    var empates = document.getElementById('empates');
    var derrotas = document.getElementById('derrotas');

    var computador = parseInt(Math.random() * 3 + 1);

    jogador.innerHTML = '<img style="border-style:solid;" src="tesoura.jpg" alt="tesoura">'

    if (computador == 1) {
        adversario.innerHTML = '<img style="border-style:solid;" src="papel.jpg" alt="papel";>';
        let qtdvitorias = parseInt(vitorias.textContent) + 1;
        vitorias.textContent = qtdvitorias;
        resultado.innerHTML = '<img style="border-style:solid;" src="vitoria.jpg" alt="vitoria">';
    } else if (computador == 2) {
        adversario.innerHTML = '<img style="border-style:solid;" src="tesoura.jpg" alt="tesoura";>';
        let qtdempates = parseInt(empates.textContent) + 1;
        empates.textContent = qtdempates;
        resultado.innerHTML = '<img style="border-style:solid;" src="empate.jpg" alt="empate">';
    } else if (computador == 3) {
        adversario.innerHTML = '<img style="border-style:solid;" src="pedra.jpg" alt="pedra">';
        let qtdderrotas = parseInt(derrotas.textContent) + 1;
        derrotas.textContent = qtdderrotas;
        resultado.innerHTML = '<img style="border-style:solid;" src="derrota.jpg" alt="derrota">';
    }

}


//quando o botão for clicado, será executado a função correspondente a ele.
pedra.addEventListener('click', calculapedra);
papel.addEventListener('click', calculapapel);
tesoura.addEventListener('click', calculatesoura);