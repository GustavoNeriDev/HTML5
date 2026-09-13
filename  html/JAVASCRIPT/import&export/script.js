import { salvarUsuarios, buscarUsuarios } from "./storage.js";

import { criarUsuario, encontrarUsuarioPorEmail } from "./usuarios.js";

const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

const mostrar = document.getElementById("mostrar");

const resultado = document.getElementById("resultado");

function cadastrarUsuario(event) {
  event.preventDefault();

  if (nome.value.trim() === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  if (nome.value.trim().length < 3) {
    resultado.textContent = "Invalido";
    return;
  }

  if (idade.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  if (Number(idade.value) <= 0 || Number(idade.value) > 120) {
    resultado.textContent = "Idade invalida";
    return;
  }

  if (email.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  if (!email.value.includes(".") || !email.value.includes("@")) {
    resultado.textContent = "Email invalido";
    return;
  }

  if (senha.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  if (senha.value.length <= 6) {
    resultado.textContent = "Senha invalida";
    return;
  }

  /*criacão de variavel constante, que vai valer pelo import buscarusuario, sempre usar 
    antes de aplicar  a logica  */
  const usuarios = buscarUsuarios();

  const usuarioExistente = encontrarUsuarioPorEmail(email.value, usuarios);

  if (usuarioExistente) {
    resultado.textContent = "Email já cadastrado";
    return;
  }

  const user = criarUsuario(
    nome.value,
    Number(idade.value),
    email.value,
    senha.value,
    usuarios,
  );
  usuarios.push(user);

  salvarUsuarios(usuarios);
  resultado.textContent = "Cadastrado com sucesso";

  formulario.reset();
}

function mostrarUsuarios() {
  const user = buscarUsuarios();

  if (user.length === 0) {
    resultado.textContent = "Inexistente";
    return;
  }
  resultado.innerHTML = "<h3> usuarios </h3>";
  user.forEach(({ id, nome, email, idade }) => {
    resultado.innerHTML += `nome: ${nome} <br> 
        idade: ${idade}<br>
        email: ${email} <br>
        id: ${id}`;
  });
}

formulario.addEventListener("submit", cadastrarUsuario);

mostrar.addEventListener("click", mostrarUsuarios);
