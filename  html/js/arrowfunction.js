const nome = document.getElementById("nome");
const vila = document.getElementById("vila");
const rank = document.getElementById("rank");

const adicionar = document.getElementById("adicionar");

const resultado = document.getElementById("resultado");

const ninjas = [];

function adicionarNinja() {
  if (rank.value === "" || vila.value === "" || nome.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const ninja = {
    nome: nome.value,
    vila: vila.value,
    rank: rank.value,
  };

  ninjas.push(ninja);
  let texto = "";

  ninjas.forEach((personagens) => {
    texto += `nome: ${personagens.nome} vila: ${personagens.vila} rank:${personagens.rank} <br>`;
  });

  resultado.innerHTML = texto;

  nome.value = "";
  vila.value = "";
  rank.value = "";
}

adicionar.addEventListener("click", adicionarNinja);

const nome = document.getElementById("nome");
const poder = document.getElementById("poder");
const transformacao = document.getElementById("transformacao");

const adicionar = document.getElementById("adicionar");
const mostrarNomes = document.getElementById("mostrarNomes");

const resultado = document.getElementById("resultado");

const guerreiros = [];

function adicionarGuerreiro() {
  if (nome.value === "" || poder.value === "" || transformacao.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const poderDigitado = Number(poder.value);
  if (poderDigitado <= 0) {
    resultado.textContent = "Poder digitado invalido";
    return;
  }

  const guerreiro = {
    nome: nome.value,
    poder: poderDigitado,
    transformacao: transformacao.value,
  };

  guerreiros.push(guerreiro);
  let texto = "";
  guerreiros.forEach((warrior) => {
    texto += `${warrior.nome} poder: ${warrior.poder} tranformção: ${warrior.transformacao} <br>`;
  });
  resultado.innerHTML = texto;

  nome.value = "";
  transformacao.value = "";
  poder.value = "";
}

function listarNomes() {
  if (guerreiros.length === 0) {
    resultado.textContent = "não existe guerreiros";
    return;
  }

  const listar = guerreiros.map((warrior) => {
    return `${warrior.nome} <br>`;
  });

  resultado.innerHTML = listar.join("");
}

adicionar.addEventListener("click", adicionarGuerreiro);
mostrarNomes.addEventListener("click", listarNomes);
