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

const nome = document.getElementById("nome");
const poder = document.getElementById("poder");
const transformacao = document.getElementById("transformacao");

const adicionar = document.getElementById("adicionar");
const buscar = document.getElementById("buscar");

const resultado = document.getElementById("resultado");

const guerreiros = [];

function adicionarGuerreiro() {
  if (nome.value === "" || poder.value === "" || transformacao.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const poderDigitado = Number(poder.value);

  const guerreiro = {
    nome: nome.value,
    poder: poderDigitado,
    transformacao: transformacao.value,
  };

  guerreiros.push(guerreiro);
  let texto = "";

  guerreiros.forEach((warrior) => {
    texto += `${warrior.nome} poder: ${warrior.poder} transformação: ${warrior.transformacao} <br>`;
  });

  resultado.innerHTML = texto;

  nome.value = "";
  poder.value = "";
  transformacao.value = "";
}

function buscarTransformacao() {
  if (transformacao.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const encontrar = guerreiros.filter((warrior) => {
    return warrior.transformacao === transformacao.value;
  });

  if (encontrar.length === 0) {
    resultado.textContent = `transformação não encontrada `;
    return;
  }

  let texto = "";
  guerreiros.forEach((warrior) => {
    texto += `${warrior.nome} poder: ${warrior.poder} tranformação: ${warrior.transformacao} <br>`;
  });

  resultado.innerHTML = texto;

  transformacao.value = "";
}

adicionar.addEventListener("click", adicionarGuerreiro);
buscar.addEventListener("click", buscarTransformacao);

const nome = document.getElementById("nome");
const poder = document.getElementById("poder");
const transformacao = document.getElementById("transformacao");

const adicionar = document.getElementById("adicionar");
const buscar = document.getElementById("buscar");

const resultado = document.getElementById("resultado");

const guerreiros = [];

function adicionarGuerreiro() {
  if (nome.value === "" || poder.value === "" || transformacao.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const poderDigitado = Number(poder.value);

  const guerreiro = {
    nome: nome.value,
    poder: poderDigitado,
    transformacao: transformacao.value,
  };

  guerreiros.push(guerreiro);
  let texto = "";

  guerreiros.forEach((warrior) => {
    texto += `${warrior.nome} poder: ${warrior.poder} transformação: ${warrior.transformacao} <br>`;
  });

  resultado.innerHTML = texto;

  nome.value = "";
  poder.value = "";
  transformacao.value = "";
}

function buscarTransformacao() {
  if (transformacao.value === "") {
    resultado.textContent = "Digite a tranformação";
    return;
  }

  const encontrar = guerreiros.filter((warrior) => {
    return warrior.transformacao === transformacao.value;
  });

  if (encontrar.length === 0) {
    resultado.textContent = "Tranformação não encontrada";
    return;
  }

  const alterar = encontrar.map((warrior) => {
    return `${warrior.nome} - ${warrior.poder} tranformação${warrior.transformacao} <br>`;
  });

  resultado.innerHTML = alterar.join("");
}

function buscarGuerreiro() {
  if (nome.value === "") {
    resultado.textContent = "Por favor, preencha o nome";
    return;
  }

  const buscarPersonagem = guerreiros.find((warrior) => {
    return warrior.nome === nome.value;
  });

  if (buscarPersonagem) {
    resultado.innerHTML = `
    Guerreiro encontrado: ${buscarPersonagem.nome}<br>
    poder: ${buscarPersonagem.poder}<br>
    tranformação: ${buscarPersonagem.transformacao}
`;
  } else {
    resultado.textContent = `guerreiro não encontrado`;
  }

  nome.value = "";
}

function removerGuerreiro() {
  if (nome.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const verificar = guerreiros.findIndex((warrior) => {
    return (
      warrior.nome === nome.value &&
      warrior.poder === Number(poder.value) &&
      warrior.transformacao === transformacao.value
    );
  });
  if (verificar === -1) {
    resultado.textContent = `guerreiro não encontrado`;
    return;
  }

  const guerreiroRemovido = guerreiro[verificar];

  guerreiros.splice(verificar, 1);

  resultado.innerHTML = `guerreiro: ${guerreiroRemovido.nome} <br>
    poder: ${guerreiroRemovido.poder} <br>
    tranformação: ${guerreiroRemovido.transformacao}`;

  nome.value === "";
  poder.value === "";
  transformacao.value = "";
}

remover.addEventListener("click", removerNinja);

adicionar.addEventListener("click", adicionarGuerreiro);
buscar.addEventListener("click", buscarTransformacao);
buscar.addEventListener("click", buscarGuerreiro);

const nome = document.getElementById("nome");
const vila = document.getElementById("vila");
const rank = document.getElementById("rank");

const adicionar = document.getElementById("adicionar");
const buscar = document.getElementById("buscar");
const remover = document.getElementById("remover");
const listar = document.getElementById("listar");

const resultado = document.getElementById("resultado");

const ninjas = [];

function adicionarNinja() {
  if (nome.value === "" || vila.value === "" || rank.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const ninja = {
    nome: nome.value,
    vila: vila.value,
    rank: rank.value,
  };

  ninjas.push(ninja);
  let texto = "";
  ninjas.forEach((nin) => {
    texto += `${nin.nome} vila: ${nin.vila} rank: ${nin.rank} <br>`;
  });

  resultado.innerHTML = texto;

  nome.value = "";
  rank.value = "";
  vila.value = "";
}

function buscarNinja() {
  if (nome.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const buscar = ninjas.find((nin) => {
    return nin.nome === nome.value;
  });

  if (buscar) {
    resultado.innerHTML = `ninja encontrado ${buscar.nome} <br>
        vila: ${buscar.vila} <br>
        rank: ${buscar.rank}`;
  } else {
    resultado.textContent = `ninja não encontrado`;
  }

  nome.value = "";
}

function removerNinja() {
  if (nome.value === "" || rank.value === "" || vila.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const remover = ninjas.findIndex((nin) => {
    return (
      nin.nome === nome.value &&
      nin.vila === vila.value &&
      nin.rank === rank.value
    );
  });

  if (remover === -1) {
    resultado.textContent = `ninja não encontrado`;
    return;
  }

  const ninjaRemovido = ninjas[remover];
  ninjas.splice(remover, 1);

  resultado.innerHTML = `${ninjaRemovido.nome} <br>
    vila: ${ninjaRemovido.vila} <br>
    rank: ${ninjaRemovido.rank}`;

  nome.value = "";
  rank.value = "";
  vila.value = "";
}

function listarNinjas() {
  if (ninjas.length === 0) {
    resultado.textContent = `ninjas não encontrados`;
    return;
  }
  let texto = "";
  ninjas.forEach((nin) => {
    texto += `${nin.nome} vila: ${nin.vila} rank: ${nin.rank} <br>`;
  });

  resultado.innerHTML = texto;
}

adicionar.addEventListener("click", adicionarNinja);
buscar.addEventListener("click", buscarNinja);
remover.addEventListener("click", removerNinja);
listar.addEventListener("click", listarNinjas);
