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

const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function fazerLogin() {
  if (usuario.value === "" || senha.value === "") {
    resultado.textContent = "Preencha todos os campos";
  } else if (usuario.value === "admin" && senha.value === "1234") {
    resultado.textContent = "Login realizado com sucesso!";
  } else {
    resultado.textContent = "Usuário ou senha incorretos";
  }
}

botao.addEventListener("click", fazerLogin);

const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

let tentativas = 0;

function fazerLogin() {
  if (tentativas >= 3) {
    resultado.textContent = "Conta bloqueada.";
    return;
  }

  if (usuario.value === "" || senha.value === "") {
    resultado.textContent = "Preencha todos os campos.";
    return;
  }

  if (usuario.value === "admin" && senha.value === "1234") {
    resultado.textContent = "Login realizado com sucesso!";
  } else {
    tentativas++;

    if (tentativas >= 3) {
      resultado.textContent = "Conta bloqueada.";
    } else {
      resultado.textContent = `Usuário ou senha incorretos. Tentativas: ${tentativas} de 3`;
    }
  }
}

botao.addEventListener("click", fazerLogin);

const valor = document.getElementById("valor");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

let saldo = 1000;

function sacar() {
  if (valor.value === "") {
    resultado.textContent = "Digite um valor.";
    return;
  }

  if (Number(valor.value) <= 0) {
    resultado.textContent = "Valor inválido.";
    return;
  }

  if (Number(valor.value) > saldo) {
    resultado.textContent = "Saldo insuficiente.";
    return;
  }

  saldo -= Number(valor.value);

  if (saldo === 0) {
    resultado.textContent = "Sua conta ficou sem saldo.";
  } else {
    resultado.textContent =
      "Saque realizado com sucesso! Saldo atual: R$ " + saldo;
  }
}

botao.addEventListener("click", sacar);

const nome = document.getElementById("nome");
const valor = document.getElementById("valor");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

let saldo = 500;

function comprar() {
  if (nome.value === "" || valor.value === "") {
    resultado.textContent = "Preencha todos os campos.";
    return;
  }

  if (Number(valor.value) <= 0) {
    resultado.textContent = "Valor inválido.";
    return;
  }

  if (Number(valor.value) > saldo) {
    resultado.textContent = "Saldo insuficiente.";
    return;
  }

  saldo -= Number(valor.value);

  if (saldo === 0) {
    resultado.textContent =
      nome.value + ", compra realizada com sucesso! Seu saldo zerou.";
  } else {
    resultado.textContent =
      nome.value +
      ", compra realizada com sucesso! Saldo restante: R$ " +
      saldo;
  }
}

botao.addEventListener("click", comprar);

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function cadastrar() {
  if (nome.value === "" || idade.value === "") {
    resultado.textContent = "Preencha todos os campos.";
    return;
  }

  if (Number(idade.value) >= 18) {
    resultado.textContent = `Bem-vindo, ${nome.value}! Cadastro realizado com sucesso!`;
  } else {
    resultado.textContent = `${nome.value}, você é menor de idade.`;
  }
}

botao.addEventListener("click", cadastrar);

const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function entrar() {
  if (usuario.value === "" || senha.value === "") {
    resultado.textContent = "Preencha todos os campos.";
    return;
  } else if (usuario.value === "go" && senha.value === "1234") {
    resultado.textContent = "Login realizado com sucesso!";

    usuario.value = "";
    senha.value = "";
  } else {
    resultado.textContent = "Usuário ou senha incorretos.";
  }
}

botao.addEventListener("click", entrar);

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function comprarIngresso() {
  if (nome.value === "" || idade.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  } else if (Number(idade.value) <= 0) {
    resultado.textContent = "Digite uma idade valida";
    return;
  } else if (Number(idade.value) >= 18) {
    resultado.textContent = `${nome.value}, compra realizada com sucesso`;
    idade.value = "";
    nome.value = "";
  } else {
    resultado.textContent = `${nome.value}, voce não pode comprar esse ingresso`;

    idade.value = "";
    nome.value = "";
  }
}

botao.addEventListener("click", comprarIngresso);
