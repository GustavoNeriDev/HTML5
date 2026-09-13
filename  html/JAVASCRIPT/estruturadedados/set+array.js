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
