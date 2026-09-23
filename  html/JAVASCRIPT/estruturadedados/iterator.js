//criando um iterador
const nome = document.getElementById("nome");
const adicionar = document.getElementById("adicionar");
const proximo = document.getElementById("proximo");
const reiniciar = document.getElementById("reiniciar");
const resultado = document.getElementById("resultado");

const nomes = [];

let iterador = nomes[Symbol.iterator]();

function adicionarNome() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Verifique os caracteres";
    return;
  }
  //adicionando o nome digitado ao array
  nomes.push(nomeUser);
  resultado.textContente = "Nome adicionado";
}

function proximoNome() {
  //verificar se existem nomes ainda
  const iteratores = iterador.next();
  //se terminou ou não (done)
  if (iteratores.done) {
    resultado.textContent = "Não existem mais nomes";
    return;
  }
  //.value porque ele retorna um objeto
  resultado.textContent = `Próximo: ${iteratores.value}`;
}

function reiniciarIterator() {
  //acessando o iterator
  iterador = nomes[Symbol.iterator]();
  resultado.textContent = "Reiniciado";
}

adicionar.addEventListener("click", adicionarNome);
proximo.addEventListener("click", proximoNome);
reiniciar.addEventListener("click", reiniciarIterator);

//////////////////////////////////////////////////////////////////////////////////

const nome = document.getElementById("nome");
const adicionar = document.getElementById("adicionar");
const listar = document.getElementById("listar");
const manual = document.getElementById("manual");
const resultado = document.getElementById("resultado");

const nomes = [];

let iterador = nomes[Symbol.iterator]();

function adicionarNome() {
  const userNome = nome.value.trim();
  if (userNome === "" || userNome.length < 3 || userNome.length > 120) {
    resultado.textContent = "Verifique os caracteres";
    return;
  }
  nomes.push(userNome);
  resultado.textContent = "Nome adicionado";
}

function listarNomes() {
  let texto = "";
  //percorrer os nomes, obs: o for of percorre todos os elementos do array, o contrario do next que percorre um por vez
  for (const nome of nomes) {
    texto += `
        ${nome}`;
  }
  if (nomes.length === 0) {
    resultado.textContent = "Não existe nomes";
    return;
  }
  resultado.innerHTML = texto;
}

function proximoManual() {
  //iterador.next() percorre um por um manualmente
  const resultadoiterator = iterador.next();
  if (resultadoiterator.done) {
    resultado.textContent = "Fim da lista";
  } else {
    resultado.textContent = `proximo é ${resultadoiterator.value}`;
  }
}

adicionar.addEventListener("click", adicionarNome);
listar.addEventListener("click", listarNomes);
manual.addEventListener("click", proximoManual);
