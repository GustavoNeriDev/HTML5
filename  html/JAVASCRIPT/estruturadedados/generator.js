const nome = document.getElementById("nome");
const adicionar = document.getElementById("adicionar");
const proximo = document.getElementById("proximo");
const reiniciar = document.getElementById("reiniciar");
const resultado = document.getElementById("resultado");

const nomes = [];

function* gerarNomes() {
  //percorrendo o array e aplicando yield para pausar na hora de verificar os nomes, tipo o iterator manual
  for (const nome of nomes) {
    yield nome;
  }
}

let gerador = gerarNomes();

function adicionarNome() {
  const userNome = nome.value.trim();
  if (userNome === "" || userNome.length < 3 || userNome.length > 120) {
    resultado.textContent = "Verifique os caracteres";
    return;
  }
  nomes.push(userNome);
  resultado.textContent = "Adicionado com sucesso";
}

function proximoNome() {
  const realizarProximoNome = gerador.next();
  if (realizarProximoNome.done) {
    resultado.textContent = "Terminou";
  } else {
    resultado.textContent = `proximo ${realizarProximoNome.value}`;
  }
}

function reiniciarGenerator() {
  //a chamada de geraNomes() cria um novo gerador
  gerador = gerarNomes();
  resultado.textContent = "Nome reiniciado com sucesso";
}

adicionar.addEventListener("click", adicionarNome);
proximo.addEventListener("click", proximoNome);
reiniciar.addEventListener("click", reiniciarGenerator);

//////////////////////////////////////////////////////////////////
//generator recebendo valores

const nome = document.getElementById("nome");
const iniciar = document.getElementById("iniciar");
const enviar = document.getElementById("enviar");
const finalizar = document.getElementById("finalizar");
const resultado = document.getElementById("resultado");

function* cadastro() {
  const nome = yield "Digite seu nome";
  const idade = yield "Digite sua idade";

  return `nome ${nome} idade ${idade}`;
}

let gerador = cadastro();

function iniciarCadastro() {
  const gerandocadastro = gerador.next();
  if (gerandocadastro.done) {
    resultado.textContent = "Terminou";
  } else {
    resultado.textContent = `proximo ${gerandocadastro.value}`;
  }
}

function enviarNome() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  //enviando para o return da função
  const enviado = gerador.next(nomeUser);
  resultado.textContent = enviado.value;
}

function finalizarCadastro() {
  const digitarIdade = prompt("Digite sua idade?");
  const idadeDigitada = gerador.next(digitarIdade);
  if (idadeDigitada.done) {
    //aplicando value porque o done é true por causa da idade que foi enviada ao return
    resultado.textContent = idadeDigitada.value;
  } else {
    resultado.textContent = `proximo ${idadeDigitada.value}`;
  }
}

iniciar.addEventListener("click", iniciarCadastro);
enviar.addEventListener("click", enviarNome);
finalizar.addEventListener("click", finalizarCadastro);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const numero = document.getElementById("numero");
const adicionar = document.getElementById("adicionar");
const proximo = document.getElementById("proximo");
const listar = document.getElementById("listar");
const reiniciar = document.getElementById("reiniciar");
const resultado = document.getElementById("resultado");

const numeros = [];

function* gerarNumeros() {
  //gerando o numero ultilizando a constante e que vai adicionar ao array numeros
  for (const numero of numeros) {
    yield numero;
  }
}

let gerador = gerarNumeros();

function adicionarNumero() {
  const numeroAdicionar = Number(numero.value);
  if (numeroAdicionar === "" || numeroAdicionar < 0) {
    resultado.textContent = "Numero invalido";
    return;
  }

  numeros.push(numeroAdicionar);
  resultado.textContent = "Numero adicionado";
}

function proximoNumero() {
  const realizarProximoNumero = gerador.next();
  if (realizarProximoNumero.done) {
    resultado.textContent = "Terminou";
  } else {
    resultado.textContent = `proximo ${realizarProximoNumero.value}`;
  }
}

function listarNumeros() {
  let texto = "";
  for (const numero of gerador) {
    //usa a variavel texto quando for mostrar varios numero
    texto += `${numero}`;
  }
  resultado.innerHTML = texto;
}

function reiniciarGenerator() {
  gerador = gerarNumeros();
  resultado.textContent = "reiniciado";
}

adicionar.addEventListener("click", adicionarNumero);
proximo.addEventListener("click", proximoNumero);
listar.addEventListener("click", listarNumeros);
reiniciar.addEventListener("click", reiniciarGenerator);

//////////////////////////////////////////////////////

const nome = document.getElementById("nome");
const iniciar = document.getElementById("iniciar");
const enviar = document.getElementById("enviar");
const idade = document.getElementById("idade");
const resultado = document.getElementById("resultado");

function* cadastro() {
  const idadeUsuario = yield "Digite sua idade";
  const nomeUsuario = yield "Digite seu nome";

  return `idade ${idadeUsuario} Nome ${nomeUsuario}`;
}

let gerador = cadastro();

function iniciarCadastro() {
  const gerandocadastro = gerador.next();
  if (gerandocadastro.done) {
    resultado.textContent = "Terminou";
  } else {
    resultado.textContent = `proximo ${gerandocadastro.value}`;
  }
}

function enviarNome() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Verifique a quantidade de caracteres";
    return;
  }

  const enviado = gerador.next(nomeUser);
  resultado.textContent = enviado.value;
}

function enviarIdade() {
  const idadeUser = Number(idade.value);
  if (idade.value === "" || idadeUser < 0 || idadeUser > 120) {
    resultado.textContent = "Idade invalida";
    return;
  }
  const enviado = gerador.next(idadeUser);
  resultado.textContent = enviado.value;
}

iniciar.addEventListener("click", iniciarCadastro);
enviar.addEventListener("click", enviarNome);
idade.addEventListener("click", enviarIdade);

////////////////////////////////////////////////////////////////
//if + yield, controle de fluxo

const nome = document.getElementById("nome");
const iniciar = document.getElementById("iniciar");
const enviarNome = document.getElementById("enviarNome");
const enviarIdade = document.getElementById("enviarIdade");
const resultado = document.getElementById("resultado");

function* verificarAcesso() {
  const nomeUsuario = yield "Digite seu nome";
  const idadeUsuario = yield "Digite sua idade";
  //controle de fluxo de idade do usuario
  if (idadeUsuario >= 18) {
    return `acesso permitido para ${nomeUsuario}`;
  } else {
    return `acesso negado para ${nomeUsuario}`;
  }
}

let gerador = verificarAcesso();

function iniciarVerificacao() {
  const verificar = gerador.next();
  if (verificar.done) {
    resultado.textContent = "Terminou";
  } else {
    resultado.textContent = `proximo ${verificar.value}`;
  }
}

function enviarNomeUsuario() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Quantidade de caracteres invalido";
    return;
  }

  const enviado = gerador.next(nomeUser);
  resultado.textContent = enviado.value;
}

function enviarIdadeUsuario() {
  const idadeUser = Number(prompt("Digite sua idade"));
  //como o valor da idade vem de um prompt, deve verificar o isNaN, porque pode retornar string
  if (idadeUser < 0 || idadeUser > 120 || Number.isNaN(idadeUser)) {
    resultado.textContent = "Idade invalida";
    return;
  }

  const enviado = gerador.next(idadeUser);
  resultado.textContent = enviado.value;
}

iniciar.addEventListener("click", iniciarVerificacao);
enviarNome.addEventListener("click", enviarNomeUsuario);
enviarIdade.addEventListener("click", enviarIdadeUsuario);
