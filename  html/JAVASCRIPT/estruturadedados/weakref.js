//cache temporario de usuarios
const nome = document.getElementById("nome");
const cadastrar = document.getElementById("cadastrar");
const consultar = document.getElementById("consultar");
const remover = document.getElementById("remover");
const resultado = document.getElementById("resultado");

let usuario = null;
let referenciaFraca = null;

function cadastrarUsuario() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 100) {
    resultado.textContent = "Verifique os caracteres digitado";
    return;
  }
  const objeto = {
    nome: nomeUser,
  };
  //atribuindo o objeto ao usuario
  usuario = objeto;
  //atribuindo o objeto a ref
  referenciaFraca = new WeakRef(objeto);
  resultado.textContent = "Usuario cadastrado";
}

function consultarUsuario() {
  //verificcando se a referencia existe
  if (referenciaFraca === null) {
    resultado.textContent = "Não encontrado";
  }
  //acessando o valor da ref
  const consultar = referenciaFraca.deref();
  if (consultar !== undefined) {
    resultado.textContent = `usuario encontrado ${consultar.nome}`;
  } else {
    resultado.textContent = "Não encontrado";
  }
}

function removerReferencia() {
  usuario = null;
  resultado.textContent = "Removido";
}

cadastrar.addEventListener("click", cadastrarUsuario);
consultar.addEventListener("click", consultarUsuario);
remover.addEventListener("click", removerReferencia);
