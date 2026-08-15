const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const ninja = {
  nome: "Kakashi",
  vila: "Konoha",
  rank: "Jounin",
};

function mostrarNinja() {
  const { nome, vila, rank } = ninja;

  resultado.innerHTML = `${nome} <br>
    ${vila} <br> 
    ${rank}`;
}

botao.addEventListener("click", mostrarNinja);

const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const ninjas = [
  {
    nome: "Naruto",
    vila: "Konoha",
    rank: "Hokage",
  },
  {
    nome: "Gaara",
    vila: "Suna",
    rank: "Kage",
  },
  {
    nome: "Kakashi",
    vila: "Konoha",
    rank: "Jounin",
  },
];

function listarNinjas() {
  let texto = "";

  ninjas.forEach(({ nome, vila, rank }) => {
    texto += `${nome} vila: ${vila} rank: ${rank} <br>`;
  });

  resultado.innerHTML = texto;
}

botao.addEventListener("click", listarNinjas);

//////RENOMEAR VARIAVEL/////

const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const ninja = {
  nome: "Sasuke",
  vila: "Konoha",
  rank: "S",
};

function mostrarNinja() {
  const { nome: nomeNinja, vila: vilaNinja, rank: rankNinja } = ninja;

  resultado.innerHTML = `nome: ${nomeNinja} <br>
    vila: ${vilaNinja} <br>
    rank: ${rankNinja}`;
}

botao.addEventListener("click", mostrarNinja);

const vila = document.getElementById("vila");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const ninjas = [
  {
    nome: "Naruto",
    vila: "Konoha",
    rank: "Hokage",
  },
  {
    nome: "Gaara",
    vila: "Suna",
    rank: "Kage",
  },
  {
    nome: "Kakashi",
    vila: "Konoha",
    rank: "Jounin",
  },
  {
    nome: "Sasuke",
    vila: "Konoha",
    rank: "S",
  },
  {
    nome: "Temari",
    vila: "Suna",
    rank: "Jounin",
  },
];

function buscarNinjas() {
  if (vila.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const resultadoBusca = ninjas.filter(({ vila: vilaNinja }) => {
    return vilaNinja === vila.value;
  });

  if (resultadoBusca.length === 0) {
    resultado.textContent = "Nenhum ninja encontrado";
    return;
  }
  let texto = "";
  resultadoBusca.forEach(({ nome, vila, rank }) => {
    texto += `${nome} vila: ${vila} rank: ${rank} <br>`;
  });
  resultado.innerHTML = texto;
  vila.value = "";
}

botao.addEventListener("click", buscarNinjas);

const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const missoes = [
  {
    nome: "Proteger a vila",
    ninja: "Naruto",
    rank: "S",
    recompensa: 5000,
    concluida: true,
  },
  {
    nome: "Encontrar o pergaminho",
    ninja: "Sasuke",
    rank: "A",
    recompensa: 3000,
    concluida: true,
  },
  {
    nome: "Capturar criminoso",
    ninja: "Kakashi",
    rank: "S",
    recompensa: 4500,
    concluida: false,
  },
  {
    nome: "Escoltar comerciante",
    ninja: "Gaara",
    rank: "B",
    recompensa: 2000,
    concluida: true,
  },
  {
    nome: "Investigar floresta",
    ninja: "Sakura",
    rank: "A",
    recompensa: 2500,
    concluida: false,
  },
];

function mostrarMissoes() {
  const busca = missoes.filter(({ concluida: missoeConcluidas }) => {
    return missoeConcluidas === true;
  });

  const lista = busca.map(({ nome, ninja, recompensa }) => {
    return `${nome} ninja: ${ninja} recompensa ${recompensa} <br>`;
  });

  const soma = missoes.reduce((soma, { recompensa }) => {
    return soma + recompensa;
  }, 0);
  resultado.innerHTML = `<h3> missoes concluidas </h3>
    ${lista.join("")} <br>
    <strong> total de missoes: ${busca.length}</strong> <br>
    <strong> recompensa total: ${soma} </strong>`;
}

botao.addEventListener("click", mostrarMissoes);

const vila = document.getElementById("vila");
const nomeNinja = document.getElementById("nomeNinja");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const ninjas = [
  {
    nome: "Naruto",
    vila: "Konoha",
    rank: "Hokage",
    salario: 10000,
    ativo: true,
  },
  {
    nome: "Sasuke",
    vila: "Konoha",
    rank: "S",
    salario: 8000,
    ativo: true,
  },
  {
    nome: "Gaara",
    vila: "Suna",
    rank: "Kage",
    salario: 9000,
    ativo: true,
  },
  {
    nome: "Kakashi",
    vila: "Konoha",
    rank: "Jounin",
    salario: 7000,
    ativo: false,
  },
  {
    nome: "Sakura",
    vila: "Konoha",
    rank: "Jounin",
    salario: 6000,
    ativo: true,
  },
];

function gerarRelatorio() {
  if (vila.value === "" || nomeNinja.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const busca = ninjas.filter(({ vila: vilaNinja, ativo }) => {
    return vilaNinja === vila.value && ativo === true;
  });

  if (busca.length === 0) {
    resultado.textContent = "Nenhum ninja ativo encontrado nessa vila";
    return;
  }

  const lista = busca.map(({ nome, rank, salario }) => {
    return `${nome} - Rank: ${rank} - Salário: R$ ${salario}<br>`;
  });

  const soma = busca.reduce((soma, { salario }) => {
    return soma + salario;
  }, 0);

  const ninjaEncontrado = ninjas.find(({ nome }) => {
    return nome === nomeNinja.value;
  });

  if (!ninjaEncontrado) {
    resultado.textContent = "Ninja não encontrado";
    return;
  }

  const { nome, vila: vilaNinja, rank, salario, ativo } = ninjaEncontrado;

  resultado.innerHTML = `
        <h3>Ninjas ativos</h3>

        ${lista.join("")}

        <br>

        <strong>Salário total: R$ ${soma}</strong>

        <hr>

        <h3>Ninja pesquisado</h3>

        Nome: ${nome}<br>
        Vila: ${vilaNinja}<br>
        Rank: ${rank}<br>
        Salário: R$ ${salario}<br>
        Status: ${ativo ? "Ativo" : "Inativo"}
    `;

  nomeNinja.value = "";
  vila.value = "";
}

botao.addEventListener("click", gerarRelatorio);

const idMissao = document.getElementById("idMissao");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const missoes = [
  {
    id: 1,
    nome: "Proteger a vila",
    ninja: "Naruto",
    rank: "S",
    recompensa: 5000,
    concluida: true,
  },
  {
    id: 2,
    nome: "Capturar criminoso",
    ninja: "Sasuke",
    rank: "A",
    recompensa: 3500,
    concluida: false,
  },
  {
    id: 3,
    nome: "Escoltar comerciante",
    ninja: "Gaara",
    rank: "B",
    recompensa: 2000,
    concluida: true,
  },
  {
    id: 4,
    nome: "Investigar floresta",
    ninja: "Kakashi",
    rank: "A",
    recompensa: 4000,
    concluida: true,
  },
  {
    id: 5,
    nome: "Encontrar pergaminho",
    ninja: "Sakura",
    rank: "S",
    recompensa: 6000,
    concluida: false,
  },
];

function gerarRelatorio() {
  if (idMissao.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const busca = missoes.filter(({ concluida }) => {
    return concluida === true;
  });

  if (busca.length === 0) {
    resultado.textContent = "Nenhum ninja ativo encontrado nessa vila";
    return;
  }

  const lista = busca.map(({ nome, ninja, rank, recompensa }) => {
    return `${nome} - Ninja: ${ninja} - Rank: ${rank} - Recompensa: R$ ${recompensa}<br>`;
  });

  const soma = busca.reduce((soma, { recompensa }) => {
    return soma + recompensa;
  }, 0);

  const missaoEncontrada = missoes.find(({ id }) => {
    return id === Number(idMissao.value);
  });

  if (!missaoEncontrada) {
    resultado.textContent = "Ninja não encontrado";
    return;
  }

  const {
    nome,
    missoes: missoeConcluidas,
    ninja,
    recompensa,
    rank,
  } = missaoEncontrada;
  resultado.innerHTML = `
        <h3>Ninjas ativos</h3>

        ${lista.join("")}

        <br>

        <strong>recompensa total: R$ ${soma}</strong>

        <hr>

        <h3>Ninja pesquisado</h3>
        id: ${id} <br>
        Nome: ${nome}<br>
        
        Rank: ${rank}<br>
        recompensa: R$ ${recompensa}<br>
        
    `;

  nomeNinja.value = "";
  vila.value = "";
}

botao.addEventListener("click", gerarRelatorio);
