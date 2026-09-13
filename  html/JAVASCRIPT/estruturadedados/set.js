const nome = document.getElementById("nome");
const adicionar = document.getElementById("adicionar");
const listar = document.getElementById("listar");
const resultado = document.getElementById("resultado");
//set vazio para colocar nome unico
const nomes = new Set();

function adicionarNome() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Erro ao adicionar verifique os caracteres";
    return;
  }

  //adicionando o nome
  nomes.add(nomeUser);
  resultado.textContent = "Nome adicionado";
}

function listarNomes() {
  let texto = "";
  //percorrendo os dados
  nomes.forEach((nome) => {
    texto += `
        nome: ${nome}`;
  });
  resultado.innerHTML = texto;
}

adicionar.addEventListener("click", adicionarNome);
listar.addEventListener("click", listarNomes);

/////// ATIVIDADE VERIFICANDO SE EXISTE ///////////

const nome = document.getElementById("nome");
const adicionar = document.getElementById("adicionar");
const verificar = document.getElementById("verificar");
const listar = document.getElementById("listar");
const resultado = document.getElementById("resultado");

const nomes = new Set();

function adicionarNome() {
  //deixar sem espaço
  const nomeUser = nome.value.trim();
  if (
    nomeUser.trim() === "" ||
    nomeUser.trim().length < 3 ||
    nomeUser.trim().length > 120
  ) {
    resultado.textContent = "Erro. Verifique o campo e os caracteres";
    return;
  }
  //adicionando o nome
  nomes.add(nomeUser);
  resultado.textContent = "Nome adicionado com sucesso!";
}

function verificarNome() {
  //deixar sem espaço
  const nomeUser = nome.value.trim();

  if (
    nomeUser.trim() === "" ||
    nomeUser.trim().length < 3 ||
    nomeUser.trim().length > 120
  ) {
    resultado.textContent = "Erro. Verifique o campo e os caracteres";
    return;
  }
  //verificando se ele existe
  if (nomes.has(nomeUser)) {
    resultado.textContent = "Encontrado com sucesso";
  } else {
    resultado.textContent = "Não encontrado";
  }
}

function listarNomes() {
  //percorrendo dados
  let texto = "";
  nomes.forEach((nome) => {
    texto += `
        nome: ${nome}`;
  });
  resultado.innerHTML = texto;
}

adicionar.addEventListener("click", adicionarNome);
verificar.addEventListener("click", verificarNome);
listar.addEventListener("click", listarNomes);

////////////// ATIVIDADE CONTANDO QUANTOS VALORES TEM E REMOVENDO //////////////

const nome = document.getElementById("nome");
const adicionar = document.getElementById("adicionar");
const remover = document.getElementById("remover");
const contar = document.getElementById("contar");
const listar = document.getElementById("listar");
const resultado = document.getElementById("resultado");

const nomes = new Set();

function adicionarNome() {
  //deixar sem espaço
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Erro. Verifique o campo e os caracteres";
    return;
  }
  //adicionando o nome
  nomes.add(nomeUser);
  resultado.textContent = "Nome adicionado com sucesso!";
}

function removerNome() {
  const nomeUser = nome.value.trim();

  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Erro. Verifique o campo e os caracteres";
    return;
  }

  if (nomes.has(nomeUser)) {
    nomes.delete(nomeUser);
    resultado.textContent = `Nome removido`;
  }
}

function contarNomes() {
  const quantidade = nomes.size;
  resultado.textContent = `Total de nomes ${quantidade}`;
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
remover.addEventListener("click", removerNome);
contar.addEventListener("click", contarNomes);
listar.addEventListener("click", listarNomes);

////// VERIFICANDO SE O NOME JÁ EXISTE /////////

const nome = document.getElementById("nome");
const adicionar = document.getElementById("adicionar");
const listar = document.getElementById("listar");
const contar = document.getElementById("contar");
const resultado = document.getElementById("resultado");

const nomes = new Set();

function adicionarNome() {
  const nomeUser = nome.value.trim();

  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Erro. Verifique o campo e os caracteres";
    return;
  }
  //verificando se o dado informado já existe
  if (nomes.has(nomeUser)) {
    resultado.textContent = "Esse nome ja existe";
    return;
  }
  //adicionando
  nomes.add(nomeUser);
  resultado.textContent = "Adicionado com sucesso";
}

function listarNomes() {
  //percorrendo dados
  let texto = "";
  nomes.forEach((nome) => {
    texto += `
       nome: ${nome}`;
  });
  resultado.innerHTML = texto;
}

function contarNomes() {
  //contando os dados que tem dentro da variavel que guarda os dados

  const quantidade = nomes.size;
  resultado.textContent = `quantidade de nomes ${quantidade}`;
}

adicionar.addEventListener("click", adicionarNome);
listar.addEventListener("click", listarNomes);
contar.addEventListener("click", contarNomes);
