const nome = document.getElementById("nome");
const cadastrar = document.getElementById("cadastrar");
const verificar = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

const usuarios = new WeakMap();

let usuarioAtual = null;

function cadastrarUsuario() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Verifique os caracateres";
    return;
  }
  //WEAKMAP --> CRIANDO UM OBJ PARA DEPOIS ADICIONAR ALGUM ELEMENTO SEM MUDAR O OBJ
  const usuario = {
    nome: nomeUser,
  };
  //WEAKMAP --> ADICIONANDO O USUARIOATUAL AO OBJ USUARIO
  usuarioAtual = usuario;
  //SÓ PODE RECEBER OBJETOS COMO CHAVE
  usuarios.set(usuario, "Usuario cadastrado");
  resultado.textContent = "Cadastrado com sucesso";
}

function verificarUsuario() {
  if (usuarios.has(usuarioAtual)) {
    resultado.textContent = "Encontrado";
  } else {
    resultado.textContent = "Não encontrado";
  }
}

cadastrar.addEventListener("click", cadastrarUsuario);
verificar.addEventListener("click", verificarUsuario);

//////////// DADOS PRIVADOS

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const cadastrar = document.getElementById("cadastrar");
const verificar = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

const dadosPrivados = new WeakMap();

let usuarioAtual = null;

function cadastrarUsuario() {
  const idadeUser = Number(idade.value);
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Verifique os caracteres";
    return;
  }
  if (idadeUser < 1 || idadeUser > 120) {
    resultado.textContent = "Numeros invalidos";
    return;
  }
  //criando os objetos
  const usuario = {
    nome: nomeUser,
  };

  const dados = {
    idade: idadeUser,
  };
  //guardando os dados dentro dos dadosprivados e associando a  o objeto dados
  dadosPrivados.set(usuario, dados);
  //adicionando o usuario atual ao objeto usuario
  usuarioAtual = usuario;
  resultado.textContent = "Cadastrado com sucesso";
}

function verificarDados() {
  if (dadosPrivados.has(usuarioAtual)) {
    //recuperando os dados do usuario
    const dadosUsuario = dadosPrivados.get(usuarioAtual);
    resultado.innerHTML = `
       usuario: ${usuarioAtual.nome} <br>
       idade: ${dadosUsuario.idade}`;
  } else {
    resultado.textContent = "Não encontrado";
    return;
  }
}

cadastrar.addEventListener("click", cadastrarUsuario);
verificar.addEventListener("click", verificarDados);

//////////// APLICANDO O DELETE

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");

const cadastrar = document.getElementById("cadastrar");
const verificar = document.getElementById("verificar");
const remover = document.getElementById("remover");

const resultado = document.getElementById("resultado");

const dadosPrivados = new WeakMap();

let usuarioAtual = null;

function cadastrarUsuario() {
  const nomeUser = nome.value.trim();
  const idadeUser = Number(idade.value);

  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Verfique os dado preenchidos";
    return;
  }
  if (idadeUser < 1 || idadeUser > 120) {
    resultado.textContent = "idade invalida";
    return;
  }
  const usuario = {
    nome: nomeUser,
  };
  const dados = {
    idade: idadeUser,
  };

  usuarioAtual = usuario;
  dadosPrivados.set(usuario, dados);
  resultado.textContent = "Cadastrado feito com sucesso";
}

function verificarDados() {
  //recuperando os dado para verficar os dados encontrados
  if (dadosPrivados.has(usuarioAtual)) {
    const dadoInformado = dadosPrivados.get(usuarioAtual);

    resultado.innerHTML = `
    nome: ${usuarioAtual.nome} <br>
    idade: ${dadoInformado.idade}`;
  } else {
    resultado.textContent = "Não encontrado";
  }
}

function removerDados() {
  //se não encontrar o usuario
  if (usuarioAtual === null) {
    resultado.textContent = "Nenhum usuário cadastrado";
    return;
  }
  //remover usuario se caso foi encontrado
  const removido = dadosPrivados.delete(usuarioAtual);
  if (removido) {
    resultado.textContent = "Removido com sucesso";
  } else {
    resultado.textContent = "Não encontrado";
  }
}

cadastrar.addEventListener("click", cadastrarUsuario);
verificar.addEventListener("click", verificarDados);
remover.addEventListener("click", removerDados);

//////////  CRIANDO REFERENCIAS

const nome = document.getElementById("nome");

const cadastrar = document.getElementById("cadastrar");
const verificar = document.getElementById("verificar");
const criarReferencia = document.getElementById("criarReferencia");

const resultado = document.getElementById("resultado");

const dadosPrivados = new WeakMap();

let usuarioAtual = null;
let outraReferencia = null;

function cadastrarUsuario() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Verifique o campo";
    return;
  }
  const usuario = {
    nome: nomeUser,
  };

  usuarioAtual = usuario;
  dadosPrivados.set(usuario, "Cadastrado");

  resultado.textContent = "Usuario cadastrado";
}

function criarOutraReferencia() {
  if (usuarioAtual === null) {
    resultado.textContent = "Cadastre um usuário primeiro";
    return;
  }
  outraReferencia = usuarioAtual;
  resultado.textContent = "Outra referência criada";
}

function verificarUsuario() {
  if (dadosPrivados.has(usuarioAtual)) {
    if (dadosPrivados.has(outraReferencia)) {
      resultado.textContent = "Usuario encontrado pela referência";
    }
  } else {
    resultado.textContent = "Não encontrado";
    return;
  }
}

cadastrar.addEventListener("click", cadastrarUsuario);
criarReferencia.addEventListener("click", criarOutraReferencia);
verificar.addEventListener("click", verificarUsuario);
