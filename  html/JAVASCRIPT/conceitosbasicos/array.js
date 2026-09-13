const nome = document.getElementById("nome");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const nomes = ["Ana", "Carlos", "Pedro", "Maria"];

function verificarNome() {
  if (nome.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  let encontrado = false;

  for (let i = 0; i < nomes.length; i++) {
    /* SO SE USA ESSA CODIGO DE VERIFICAÇÃO, QUANDO VAI SOMAR, CONTAR, ALTERAR ELEMENTOS E MOSTRAR */
    if (nome.value === nomes[i]) {
      encontrado = true;
      break;
    }
  }

  if (encontrado) {
    resultado.textContent = `Nome encontrado: ${nome.value}`;
  } else {
    resultado.textContent = "Nome não encontrado.";
  }
}

botao.addEventListener("click", verificarNome);

const numero = document.getElementById("numero");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const numeros = [10, 25, 40, 70];

function verificarNumero() {
  if (numero.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  const numeroDigitado = Number(numero.value);
  let encontrarNumero = false;

  for (let i = 0; i < numeros.length; i++) {
    if (numeroDigitado === numeros[i]) {
      encontrarNumero = true;
      break;
    }
  }

  if (encontrarNumero) {
    resultado.innerHTML = `numero encontrado ${numeroDigitado}`;
  } else {
    resultado.innerHTML = "Numero não encontrado";
  }
}

botao.addEventListener("click", verificarNumero);

/* PUSH, INCLUDES & POP*/

const nome = document.getElementById("nome");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const nomes = [];

function cadastrarNome() {
  if (nome.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  nomes.push(nome.value);

  let texto = "";

  for (let i = 0; i < nomes.length; i++) {
    texto += `${nomes[i]}<br>`;
  }

  resultado.innerHTML = texto;

  nome.value = "";
}

botao.addEventListener("click", cadastrarNome);

/*POP*/

const nome = document.getElementById("nome");
const adicionar = document.getElementById("adicionar");
const remover = document.getElementById("remover");
const resultado = document.getElementById("resultado");

const nomes = [];

function adicionarNome() {
  if (nome.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  nomes.push(nome.value);

  let texto = "";

  for (let i = 0; i < nomes.length; i++) {
    texto += `${nomes[i]}<br>`;
  }

  resultado.innerHTML = texto;

  nome.value = "";
}

function removerNome() {
  if (nomes.length === 0) {
    resultado.textContent = "Não há nomes para remover.";
    return;
  }

  nomes.pop();

  let texto = "";

  for (let i = 0; i < nomes.length; i++) {
    texto += `${nomes[i]}<br>`;
  }

  resultado.innerHTML = texto;
}

adicionar.addEventListener("click", adicionarNome);
remover.addEventListener("click", removerNome);

/*INCLUDES */

const produto = document.getElementById("produto");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const produtos = ["mouse", "teclado", "gabinete", "notebook"];

function verificarProduto() {
  if (produto.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  if (produtos.includes(produto.value)) {
    resultado.textContent = `produto encontrado ${produto.value}`;
  } else {
    resultado.textContent = `produto não encontrado`;
  }

  produto.value = "";
}

botao.addEventListener("click", verificarProduto);

//////////* INDEXOF, usado para saber a posição que o elemento esta*////////

const cidade = document.getElementById("cidade");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const cidades = ["São Paulo", "Curitiba", "Rio de Janeiro", "Salvador"];

function pesquisarCidade() {
  if (cidade.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  let cidadeEncontrada = cidades.indexOf(cidade.value);

  if (cidadeEncontrada !== -1) {
    resultado.textContent = `cidade encontrada na posição ${cidadeEncontrada}`;
  } else {
    resultado.textContent = "Cidade não encontrada";
  }

  cidade.value = "";
}

botao.addEventListener("click", pesquisarCidade);

/////////// SPLICE, remove, adiciona ou substitui um elemento especifico dentro do array //////

const nome = document.getElementById("nome");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const nomes = ["Ana", "Pedro", "Carlos", "Maria"];

function removerNome() {
  if (nome.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const encontrarNome = nomes.indexOf(nome.value);

  if (encontrarNome !== -1) {
    nomes.splice(encontrarNome, 1);

    let texto = "";

    for (let i = 0; i < nomes.length; i++) {
      texto += `${nomes[i]}<br>`;
    }

    resultado.innerHTML = texto;
  } else {
    resultado.textContent = "Nome não encontrado.";
  }

  nome.value = "";
}

botao.addEventListener("click", removerNome);

/////JOIN, serve para mostrar todos os elementos do array////
const tarefa = document.getElementById("tarefa");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const tarefas = [];

function adicionarTarefa() {
  if (tarefa.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  tarefas.push(tarefa.value);

  resultado.innerHTML = tarefas.join("<br>");

  tarefa.value = "";
}

botao.addEventListener("click", adicionarTarefa);
