const nome = document.getElementById("nome");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function mostrarNome() {
  resultado.textContent = "olá" + nome.value + "!";
}

botao.addEventListener("click", mostrarNome);

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function somar() {
  resultado.textContent =
    "O resultado é: " + (Number(numero1.value) + Number(numero2.value));
}

botao.addEventListener("click", somar);

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function subtrair() {
  resultado.textContent =
    "o resultado é:" + (Number(numero1.value) - Number(numero2.value));
}

botao.addEventListener("click", subtrair);

const idade = document.getElementById("idade");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function verificarIdade() {
  if (Number(idade.value) >= 18) {
    resultado.textContent = "Você é maior de idade.";
  } else {
    resultado.textContent = "Você é menor de idade.";
  }
}

botao.addEventListener("click", verificarIdade);

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function verificarCadastro() {
  if (Number(idade.value) >= 18) {
    resultado.textContent = nome.value + "voce é maior de idade";
  } else {
    resultado.textContent = nome.value + "voce é menor de idade";
  }
}

botao.addEventListener("click", verificarCadastro);

const nome = document.getElementById("nome");
const nota = document.getElementById("nota");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function verificarNota() {
  if (Number(nota.value) === 5) {
    resultado.textContent =
      nome.value + "voce esta de recuperação" + nota.value;
  } else if (Number(nota.value) > 5) {
    resultado.textContent = nome.value + "voce esta de aprovado" + nota.value;
  } else {
    resultado.textContent = nome.value + "voce esta reprovado" + nota.value;
  }
}

botao.addEventListener("click", verificarNota);

//VALIDAÇÂO DE CAMPOS ///

const nome = document.getElementById("nome");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function validarCadastro() {
  if (nome.value === "") {
    resultado.textContent = "Digite seu nome";
  } else {
    resultado.textContent = "Cadastro realizado!";
  }
}

botao.addEventListener("click", validarCadastro);

const senha = document.getElementById("senha");

if (senha.value.length < 6) {
  resultado.textContent = "Senha muito curta";
} else {
  resultado.textContent = "Senha válida";
}
