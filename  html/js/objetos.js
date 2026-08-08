const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const guerreiros = [
  { nome: "Naruto", poder: 8000 },
  { nome: "Sasuke", poder: 7800 },
  { nome: "Goku", poder: 9000 },
  { nome: "Vegeta", poder: 8500 },
  { nome: "Madara", poder: 9200 },
];

function mostrarFortes() {
  let texto = "";

  guerreiros.forEach(function (boneco) {
    if (boneco.poder >= 8500) {
      texto += `${boneco.nome} - Poder: ${boneco.poder}<br>`;
    }
  });

  resultado.innerHTML = texto;
}

botao.addEventListener("click", mostrarFortes);

const nota = document.getElementById("nota");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const ninjas = [
  { nome: "Naruto", nota: 9 },
  { nome: "Sasuke", nota: 10 },
  { nome: "Sakura", nota: 7 },
  { nome: "Rock Lee", nota: 8 },
  { nome: "Neji", nota: 6 },
  { nome: "Gaara", nota: 10 },
];

function verificarAprovados() {
  if (nota.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const notaNinjas = Number(nota.value);

  if (notaNinjas < 0 || notaNinjas > 10) {
    resultado.textContent = "Digite uma nota valida";
    return;
  }

  let texto = "";

  ninjas.forEach(function (ninja) {
    if (ninja.nota >= notaNinjas) {
      texto += `${ninja.nome} - Nota: ${ninja.nota}<br>`;
    }
  });

  resultado.innerHTML = texto;
}
botao.addEventListener("click", verificarAprovados);

const poder = document.getElementById("poder");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const guerreiros = [
  { nome: "Goku", poder: 9000 },
  { nome: "Vegeta", poder: 8500 },
  { nome: "Gohan", poder: 7800 },
  { nome: "Piccolo", poder: 7000 },
  { nome: "Freeza", poder: 9500 },
  { nome: "Trunks", poder: 8200 },
];

function mostrarGuerreiros() {
  if (poder.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const poderDigitado = Number(poder.value);

  if (poderDigitado <= 0) {
    resultado.textContent = "Digite um número válido";
    return;
  }

  let texto = "";
  let contador = 0;

  guerreiros.forEach(function (guerreiro) {
    if (guerreiro.poder >= poderDigitado) {
      texto += `${guerreiro.nome} - Poder: ${guerreiro.poder}<br>`;
      contador++;
    }
  });

  if (contador === 0) {
    resultado.textContent = "Nenhum guerreiro encontrado.";
  } else {
    texto += `<br>Total de guerreiros encontrados: ${contador}`;
    resultado.innerHTML = texto;
  }

  poder.value = "";
}

botao.addEventListener("click", mostrarGuerreiros);

const nome = document.getElementById("nome");
const poder = document.getElementById("poder");
const adicionar = document.getElementById("adicionar");
const resultado = document.getElementById("resultado");

const guerreiros = [];

function cadastrarGuerreiro() {
  if (nome.value === "" || poder.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const poderDigitado = Number(poder.value);

  if (poderDigitado <= 0) {
    resultado.textContent = "Digite uma força de poder valido";
    return;
  }

  const guerreiro = {
    nome: nome.value,
    poder: poderDigitado,
  };

  guerreiros.push(guerreiro);

  let texto = "";

  guerreiros.forEach(function (personagem) {
    texto += `${personagem.nome} - ${personagem.poder} <br>`;
  });
  resultado.innerHTML = texto;
  nome.value = "";
  poder.value = "";
}

adicionar.addEventListener("click", cadastrarGuerreiro);

const nome = document.getElementById("nome");
const vila = document.getElementById("vila");
const rank = document.getElementById("rank");

const adicionar = document.getElementById("adicionar");
const buscar = document.getElementById("buscar");
const remover = document.getElementById("remover");

const resultado = document.getElementById("resultado");

const personagens = [];

function adicionarPersonagem() {
  if (nome.value === "" || vila.value === "" || rank.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const personagem = {
    nome: nome.value,
    vila: vila.value,
    rank: rank.value,
  };

  personagens.push(personagem);
  let texto = "";
  personagens.forEach(function (persona) {
    texto += `${persona.nome} - ${persona.vila} - ${persona.rank} <br>`;
  });
  resultado.innerHTML = texto;

  nome.value = "";
  vila.value = "";
  rank.value = "";
}

function buscarPersonagem() {
  if (nome.value === "" || vila.value === "" || rank.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const buscar = personagens.find(function (persona) {
    return (
      persona.nome === nome.value &&
      persona.vila === vila.value &&
      persona.rank === rank.value
    );
  });

  if (buscar) {
    resultado.textContent = `Personagem encontrado:
                ${buscar.nome} - ${buscar.vila} - ${buscar.rank}`;
  } else {
    resultado.textContent = "Personagem não encontrado";
  }
  nome.value = "";
  vila.value = "";
  rank.value = "";
}

function removerPersonagem() {
  if (nome.value === "" || vila.value === "" || rank.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  let texto = "";

  let remover = personagens.findIndex(function (persona) {
    ///findindex retorna a posição do objeto////
    return (
      persona.nome === nome.value &&
      persona.vila === vila.value &&
      persona.rank === rank.value
    );
  });

  if (remover !== -1) {
    personagens.splice(remover, 1);

    personagens.forEach(function (persona) {
      texto += `${persona.nome} - ${persona.vila} - ${persona.rank}<br>`;
    });

    resultado.innerHTML = texto;
  }

  nome.value = "";
  vila.value = "";
  rank.value = "";
}

adicionar.addEventListener("click", adicionarPersonagem);
buscar.addEventListener("click", buscarPersonagem);
remover.addEventListener("click", removerPersonagem);

const nome = document.getElementById("nome");
const equipe = document.getElementById("equipe");

const adicionar = document.getElementById("adicionar");
const listar = document.getElementById("listar");

const resultado = document.getElementById("resultado");

const ninjas = [];

function adicionarNinja() {
  if (nome.value === "" || equipe.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const ninja = {
    nome: nome.value,
    equipe: equipe.value,
  };

  ninjas.push(ninja);

  let texto = "";

  ninjas.forEach(function (adicionar) {
    texto += `${adicionar.nome} - ${adicionar.equipe} <br>`;
  });
  resultado.innerHTML = texto;

  nome.value = "";
  equipe.value = "";
}

function listarEquipe() {
  if (equipe.value === "") {
    resultado.textContent = "Preencha o campo da equipe.";
    return;
  }

  const equipeEncontrada = ninjas.filter(function (lista) {
    return lista.equipe === equipe.value;
  });

  if (equipeEncontrada.length === 0) {
    resultado.textContent = "Nenhum ninja encontrado nessa equipe.";
    return;
  }

  let texto = "";

  equipeEncontrada.forEach(function (ninja) {
    texto += `${ninja.nome} - ${ninja.equipe}<br>`;
  });

  texto += `<br>Total da equipe: ${equipeEncontrada.length}`;

  resultado.innerHTML = texto;

  equipe.value = "";
}

adicionar.addEventListener("click", adicionarNinja);
listar.addEventListener("click", listarEquipe);

//////filter retorna varios objetos e find so retorna 1 objeto
// então o filter usa o for ou forEach e o find so o elemento.nome ////////////

const nome = document.getElementById("nome");
const poder = document.getElementById("poder");

const adicionar = document.getElementById("adicionar");
const maisForte = document.getElementById("maisForte");

const resultado = document.getElementById("resultado");

const ninjas = [];

function adicionarNinja() {
  if (nome.value === "" || poder.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const poderDigitado = Number(poder.value);

  if (poder <= 0) {
    resultado.textContent = "Digite um poder valido";
    return;
  }

  const ninja = {
    nome: nome.value,
    poder: poderDigitado,
  };

  ninjas.push(ninja);

  let texto = "";

  ninjas.forEach(function (nin) {
    texto += `${nin.nome} - ${nin.poder} <br>`;
  });

  resultado.innerHTML = texto;
  nome.value = "";
  poder.value = "";
}

function encontrarMaisForte() {
  if (ninjas.length === 0) {
    resultado.textContent = "Nenhum ninja cadastrado";
    return;
  }

  let maisForte = ninjas[0];

  ninjas.forEach(function (ninja) {
    if (ninja.poder > maisForte.poder) {
      maisForte = ninja;
    }
  });

  resultado.textContent = `${maisForte.nome} poder: ${maisForte.poder} <br>`;

  nome.value = "";
  poder.value = "";
}

adicionar.addEventListener("click", adicionarNinja);
maisForte.addEventListener("click", encontrarMaisForte);

const nome = document.getElementById("nome");
const transformacao = document.getElementById("transformacao");
const poder = document.getElementById("poder");

const adicionar = document.getElementById("adicionar");
const buscar = document.getElementById("buscar");

const resultado = document.getElementById("resultado");

const guerreiros = [];

function adicionarGuerreiro() {
  if (nome.value === "" || transformacao.value === "" || poder.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const poderDigitado = Number(poder.value);

  if (poderDigitado <= 0) {
    resultado.textContent = "Digite um poder valido";
    return;
  }

  const guerreiro = {
    nome: nome.value,
    transformacao: transformacao.value,
    poder: poderDigitado,
  };
  guerreiros.push(guerreiro);
  let texto = "";
  guerreiros.forEach(function (boneco) {
    texto += `${boneco.nome} transformação: ${boneco.transformacao} poder: ${boneco.poder} <br>`;
  });

  resultado.innerHTML = texto;

  nome.value = "";
  transformacao.value = "";
  poder.value = "";
}

function buscarTransformacao() {
  if (transformacao.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const encontrarTransformacao = guerreiros.filter(function (boneco) {
    return boneco.transformacao === transformacao.value;
  });

  if (encontrarTransformacao.length === 0) {
    resultado.textContent = "Nenhum encontrado";
    return;
  }

  let texto = "";

  encontrarTransformacao.forEach(function (boneco) {
    texto += `${boneco.nome} transformação: ${boneco.transformacao} poder: ${boneco.poder} <br>`;
  });

  texto += `<br>Total de tranformação: ${encontrarTransformacao.length}`;
  resultado.innerHTML = texto;

  transformacao.value = "";
}

adicionar.addEventListener("click", adicionarGuerreiro);
buscar.addEventListener("click", buscarTransformacao);
