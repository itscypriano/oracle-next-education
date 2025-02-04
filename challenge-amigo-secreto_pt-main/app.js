let amigos = []; // array vazio para armazenar os nomes
let lista = document.querySelector('.name-list'); // lista do html que será exibida na tela
let resultado = document.querySelector('.result-list'); // testo de resultado do sorteio que será exibido

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('.input-name').value; // pega o texto inserido no input e armazena

    if (nomeAmigo == '') { // se o input tiver vazio
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nomeAmigo); // adiciona o valor do input no array
        exibirNomes(); // função que vai exibir os nomes adicionados no array na tela
        limparCampo(); // função pra limpar o input
    }
}


function sortearAmigo() {
    if (amigos.length >= 1) { // se a lista tiver pelo menos um elemento
        let numeroLimite = amigos.length; // numero limite a ser sorteado é a quantidade de elementos na lista
        let indiceAleatorio = Math.floor(Math.random() * numeroLimite); // gera um indice aleatorio dentro do numeroLimite
        let nomeEscolhido = amigos[indiceAleatorio]; // variavel para armazenar o nome sorteado conforme escolhido pelo indice aleatorio
        resultado.innerHTML = `O amigo escolhido foi ${nomeEscolhido}!`;
    } else {
        alert("A lista de amigos está vazia!");
    }
}


function exibirNomes() {
    lista.innerHTML = ''; // limpa a lista do html para que nao hajam nomes duplicados

    for (let i = 0; i < amigos.length; i++) { // como o for amigo in amigos (python). i++ para ler todos os nomes em amigos
        let itemLista = document.createElement('li'); // para cada nome lido, cria um elemento li
        itemLista.textContent = amigos[i]; // coloca cada nome de cada indice dentro de um li
        lista.appendChild(itemLista); // na lista html é inserido todos os nomes de cada li
    };
}


function limparCampo() {
    document.querySelector('.input-name').value = ''; // pega o input e limpa
}
