const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

const cadastrar = document.getElementById("cadastrar");

const resultado = document.getElementById("resultado");

function cadastrarUsuario() {
  if (nome.value.trim() === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  if (nome.value.trim().length < 3) {
    resultado.textContent = "quantidade de caracteres invalida";
    return;
  }
  if (idade.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  if (Number(idade.value) <= 0 || Number(idade.value) > 120) {
    resultado.textContent = "Numero invalido";
    return;
  }
  if (email.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  if (!email.value.includes("@") || !email.value.includes(".")) {
    resultado.textContent = "Email invalido";
    return;
  }
  if (senha.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  if (senha.value.length < 6) {
    resultado.textContent = "Senha invalida";
    return;
  }
  const salvarUser = localStorage.getItem("usuarios");
  const usuarios = salvarUser ? JSON.parse(salvarUser) : [];

  const usuarioExistente = usuarios.find(({ nome: nomeDigitado }) => {
    return nomeDigitado === nome.value;
  });
  if (usuarioExistente) {
    resultado.textContent = "Já está cadastrado";
    return;
  }

  const criarID = usuarios.reduce((maior, usuario) => {
    return usuario.id > maior ? usuario.id : maior;
  }, 0);

  const newId = criarID + 1;

  const usuario = {
    id: newId,
    nome: nome.value.trim(),
    idade: Number(idade.value),
    email: email.value,
    senha: senha.value,
  };
  usuarios.push(usuario);

  const dados = JSON.stringify(usuarios);

  localStorage.setItem("usuarios", dados);
  resultado.textContent = "Cadastrado com sucesso";
  nome.value = "";
  email.value = "";
  idade.value = "";
  senha.value = "";
}

cadastrar.addEventListener("click", cadastrarUsuario);
