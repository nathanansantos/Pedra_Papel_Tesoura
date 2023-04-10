//uma variável do tipo constante, onde seu valor não pode ser alterado,
//armazenando  o valor de um id no html
const calcular = document.getElementById('calcular');

//função para fazer os calculos de IMC
function imc() {

    //declaração de variáveis
    //parsefloat transforma o valor do id em float
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var resultado = document.getElementById('resultado');
    let imc = (peso / (altura * altura)).toFixed(1);
    var imagem = document.getElementById('imagem');


    //condições
    //basicamente, será feito o cálculo do IMC de acordo com os valores
    //digitados, e após isso, será mostrado o valor do IMC junto com uma
    //imagem correspondente ao peso
    if (imc < 18.5) {

        resultado.innerHTML = `Seu IMC é: ${imc} e você está abaixo do peso.`;
        imagem.innerHTML = '<img src="abaixodopeso.png" alt="abaixo do peso">';


    } else if (imc >= 18.5 && imc < 25) {

        resultado.innerHTML = `Seu IMC é: ${imc} e você está com o peso ideal.`;
        imagem.innerHTML = '<img src="pesoideal.png" alt="peso ideal">';

    } else if (imc >= 25 && imc < 30) {

        resultado.innerHTML = `Seu IMC é: ${imc} e você está acima do peso.`;
        imagem.innerHTML = '<img src="acimadopeso.png" alt="acima do peso">';

    } else if (imc >= 30) {
        resultado.innerHTML = `Seu IMC é: ${imc} e você está obeso.`;
        imagem.innerHTML = '<img src="obeso.png" alt="obeso">';
    }

}

//quando o botão que armazenada o id 'calcular' for clicado, a função será executada

calcular.addEventListener('click', imc);
