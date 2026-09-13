const nome = document.getElementById("nome");
const adicionar = document.getElementById("adicionar");
const mostrarSet = document.getElementById("mostrarSet");
const converter = document.getElementById("converter");
const listarArray = document.getElementById("listarArray");
const resultado = document.getElementById("resultado");

const nomes = new Set();

let nomesArray = [];

function adicionarNome() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Erro. Verifique o campo e os caracteres";
    return;
  }

  if (nomes.has(nomeUser)) {
    resultado.textContent = "Esse nome já existe";
    return;
  }
  nomes.add(nomeUser);
  resultado.textContent = "Adicionado com sucesso";
}

function mostrarNomesSet() {
  let texto = "";
  nomes.forEach((nome) => {
    texto += `
       nome: ${nome}`;
  });
  resultado.innerHTML = texto;
}

function converterParaArray() {
  //convertendo para array, os tres pontinhos é o spread operator
  nomesArray = [...nomes];
}

function listarNomesArray() {
  let texto = "";
  nomesArray.forEach((nome) => {
    texto += `
        nomes: ${nome}`;
  });
  resultado.innerHTML = texto;
}

adicionar.addEventListener("click", adicionarNome);
mostrarSet.addEventListener("click", mostrarNomesSet);
converter.addEventListener("click", converterParaArray);
listarArray.addEventListener("click", listarNomesArray);

/////  ATIVDADE FILTRANDO O SET //////

const nome = document.getElementById("nome");
const adicionar = document.getElementById("adicionar");
const filtrar = document.getElementById("filtrar");
const listar = document.getElementById("listar");
const resultado = document.getElementById("resultado");

const nomes = new Set();

function adicionarNome() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Erro, verifique os caracteres";
    return;
  }
  if (nomes.has(nomeUser)) {
    resultado.textContent = "Esse nome já existe";
    return;
  }
  nomes.add(nomeUser);
  resultado.textContent = "Adiconado com sucesso";
}

function filtrarNomes() {
  //adicionando o set ao array novo
  const nomesArray = [...nomes];
  const nomeUser = nome.value.trim();
  if (nomeUser === "") {
    resultado.textContent = "Erro.";
    return;
  }

  const filtrarNomes = nomesArray.filter((nome) => {
    //primeiro deixar a diferença entre maiusculas e minusculas sem alterar o resultado.  includes verifica se uma string contem outra string
    return nome.toLowerCase().includes(nomeUser.toLowerCase());
  });
  //percorrendo os nomes filtrados
  let texto = "";
  filtrarNomes.forEach((nome) => {
    texto += `
      nome: ${nome}`;
  });
}

function listarNomes() {
  let texto = "";
  nomes.forEach((nome) => {
    texto += `
      nome: ${nome}`;
  });
  resultado.innerHTML = texto;
}

adicionar.addEventListener("click", adicionarNome);
filtrar.addEventListener("click", filtrarNomes);
listar.addEventListener("click", listarNomes);
