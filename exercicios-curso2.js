// Criar uma função que exibe "Olá, mundo!" no console.
console.log('Olá mundo!');



// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function nomeInput(nome) {
    console.log(`Olá, ${nome}`);
}

nomeInput(julia);



// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function numero(a) {
    return a * 2;
}

numero(5);



// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(a, b, c) {
    return (a + b + c) / 3;
}

media(4, 9, 8);



// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maior(a, b) {
    return a > b ? a : b; // condição (a>b) + ? (verdadeira) + a (então a) + : (se não) + b (retorna b)
}

maior(78, 23);



// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function quadrado(numero) {
    return numero * numero;
}

quadrado(8);



// Crie uma função que calcule o índice de massa corporal(IMC) de uma pessoa, a partir de sua altura, em metros, e peso, 
// em quilogramas, que serão recebidos como parâmetro.

function imc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

imc(60, 1.67);



// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.
// Para isso, considere a cotação do dólar igual a R$4, 80.

function converter(valor) {
    let emDolar = valor * 4.80;
    return emDolar;
}

converter(50);



// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que 
// serão dadas como parâmetro.

function areaEPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = (altura * 2) + (largura * 2);
    return area, perimetro;
}

areaEPerimetro(5, 9);



// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero) {
    i = 1;
    while (i < 11) {
        console.log(`${numero} X ${i} = ${numero * i}`);
        i++;
    }
}

tabuada(8);



// Crie uma lista vazia, com o nome listaGenerica.

listaGenerica = [];



// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes 
// elementos: 'JavaScript', 'C', 'C++', 'Kotlin' e 'Python'.

linguagensDeProgramação = ['javascript', 'c', 'c++', 'kotlin', 'python'];



// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagensDeProgramação.push('java', 'ruby', 'golang');



// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

nomes = ['luana', 'maria', 'katia'];

nomes[0];



// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

nomes[1];



// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

nomes[-1];