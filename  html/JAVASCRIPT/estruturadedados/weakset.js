const nome = document.getElementById("nome");
const cadastrar = document.getElementById("cadastrar");
const verificar = document.getElementById("verificar");
const remover = document.getElementById("remover");
const resultado = document.getElementById("resultado");

const usuariosAtivos = new WeakSet();

let usuarioAtual = null;

function cadastrarUsuario() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Verifique os caracteres";
    return;
  }
  const usuario = {
    nome: nomeUser,
  };

  usuarioAtual = usuario;
  //adicionando o usuario atual ao objeto
  usuariosAtivos.add(usuarioAtual);
  resultado.textContent = "Cadastrado com sucesso";
}

function verificarUsuario() {
  //verificando se ele é nulo ou não
  if (usuarioAtual === null) {
    textContent = "Sem referencia";
    return;
  }

  if (usuariosAtivos.has(usuarioAtual)) {
    resultado.textContent = "Encontrado(ativo)";
  } else {
    resultado.textContent = "Não encontrado(desativado)";
  }
}

function removerUsuario() {
  //verificando se ele é nulo ou não
  if (usuarioAtual === null) {
    resultado.textContent = "Sem referência";
    return;
  }
  //removendo usuario
  const removido = usuariosAtivos.delete(usuarioAtual);
  if (removido) {
    usuarioAtual = null;
    resultado.textContent = "Removido";
  } else {
    resultado.textContent = "Não encontrado";
  }
}

cadastrar.addEventListener("click", cadastrarUsuario);
verificar.addEventListener("click", verificarUsuario);
remover.addEventListener("click", removerUsuario);

//// usando mais de um objeto

const nome = document.getElementById("nome");
const cadastrar = document.getElementById("cadastrar");
const verificar = document.getElementById("verificar");
const sair = document.getElementById("sair");
const resultado = document.getElementById("resultado");

const usuariosAtivos = new WeakSet();

let usuarioAtual = null;

function cadastrarUsuario() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Verifique os caracteres";
    return;
  }

  const usuario1 = {
    nome: nomeUser,
  };

  usuarioAtual = usuario1;
  usuariosAtivos.add(usuario1);
  resultado.textContent = "Cadastrado com sucesso";
}

function verificarUsuario() {
  if (usuarioAtual === null) {
    resultado.textContent = "Sem referência";
    return;
  }

  if (usuariosAtivos.has(usuarioAtual)) {
    resultado.textContent = "Ativo";
  } else {
    resultado.textContent = "Não está ativo";
  }
}

function desativarUsuario() {
  if (usuarioAtual === null) {
    resultado.textContent = "Sem referência";
    return;
  }

  const desativado = usuariosAtivos.delete(usuarioAtual);
  if (desativado) {
    usuarioAtual = null;
    resultado.textContent = "Usuario foi desativado";
  } else {
    resultado.textContent = "Não encontrado";
  }
}

cadastrar.addEventListener("click", cadastrarUsuario);
verificar.addEventListener("click", verificarUsuario);
sair.addEventListener("click", desativarUsuario);

////// Aplicando referências

const nome = document.getElementById("nome");
const cadastrar = document.getElementById("cadastrar");
const referencia = document.getElementById("referencia");
const verificar = document.getElementById("verificar");
const remover = document.getElementById("remover");
const resultado = document.getElementById("resultado");

const usuariosAtivos = new WeakSet();

let usuarioAtual = null;
let outraReferencia = null;

function cadastrarUsuario() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Verfique os caracteres";
    return;
  }

  const usuario = {
    nome: nomeUser,
  };

  usuarioAtual = usuario;
  usuariosAtivos.add(usuarioAtual);
  resultado.textContent = "Cadastrado com sucesso";
}

function criarReferencia() {
  if (usuarioAtual === null) {
    resultado.textContent = "Cadastre um usuario primeiro";
    return;
  }

  outraReferencia = usuarioAtual;
  resultado.textContent = "Criado com sucesso";
}

function verificarUsuario() {
  if (usuarioAtual === null) {
    resultado.textContent = "não existe";
    return;
  }
  //verficando se o usuario está ativo
  if (usuariosAtivos.has(usuarioAtual)) {
    resultado.textContent = "Usuário atual está ativo";
    //se a referência existir(true) passa para a proxima validaçãp
    if (outraReferencia !== null) {
      //se a referência apontar(true) pro mesmo usuario, validação de verficar está completa
      if (usuariosAtivos.has(outraReferencia)) {
        resultado.innerHTML += ` <br>Outra referência aponta para um usuário ativo `;
      } else {
        resultado.innerHTML += ` <br>Outra referência não aponta para um usuário ativo `;
      }
    }
  } else {
    resultado.textContent = "Usuario atual não está ativo";
  }
}

function removerUsuario() {
  if (usuarioAtual === null) {
    resultado.textContent = "Não existe";
    return;
  }

  const removido = usuariosAtivos.delete(usuarioAtual);
  if (removido) {
    usuarioAtual = null;
    outraReferencia = null;
    resultado.textContent = "Removido com sucesso";
  } else {
    resultado.textContent = "Não foi removido";
  }
}

cadastrar.addEventListener("click", cadastrarUsuario);
referencia.addEventListener("click", criarReferencia);
verificar.addEventListener("click", verificarUsuario);
remover.addEventListener("click", removerUsuario);

//// weakset com referência, delte etc

const nome = document.getElementById("nome");
const cadastrar = document.getElementById("cadastrar");
const referencia = document.getElementById("referencia");
const removerWeakSet = document.getElementById("removerWeakSet");
const removerReferencia = document.getElementById("removerReferencia");
const verificar = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

const usuariosAtivos = new WeakSet();

let usuarioAtual = null;
let outraReferencia = null;

function cadastrarUsuario() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Verifique os caracteres";
    return;
  }

  const usuario = {
    nome: nomeUser,
  };

  usuarioAtual = usuario;
  usuariosAtivos.add(usuarioAtual);
  resultado.textContent = "Cadastrado com sucesso";
}

function criarReferencia() {
  if (usuarioAtual === null) {
    resultado.textContent = "Cadastre primeiro";
    return;
  }

  outraReferencia = usuarioAtual;
  resultado.textContent = "Criado com sucesso";
}

function removerDoWeakSet() {
  if (usuarioAtual === null) {
    resultado.textContent = "Erro";
    return;
  }

  const removido = usuariosAtivos.delete(usuarioAtual);
  if (removido) {
    resultado.textContent = "Usuario removido do weakset";
  } else {
    resultado.textContent = "Não foi removido";
  }
}

function removerReferenciaUsuario() {
  if (usuarioAtual !== null) {
    //remove a referência que a variavel tinha para o objeto
    usuarioAtual = null;
  }
  if (outraReferencia !== null) {
    //remove a referência que a variavel tinha para o objeto
    outraReferencia = null;
  }
  resultado.textContent = "referência removida";
}

function verificarUsuario() {
  if (usuarioAtual === null) {
    resultado.textContent = "Não existe referência para usuario";
    return;
  }
  if (usuariosAtivos.has(usuarioAtual)) {
    resultado.textContent = "Usuario ativo";
    if (outraReferencia !== null) {
      if (usuariosAtivos.has(outraReferencia)) {
        resultado.innerHTML += `
            <br> aponta para o mesmo usuario`;
      } else {
        resultado.innerHTML += `
            <br> não aponta pro mesmo usuario`;
      }
    }
  } else {
    resultado.textContent = "Não está ativo";
  }
}
cadastrar.addEventListener("click", cadastrarUsuario);
referencia.addEventListener("click", criarReferencia);
removerWeakSet.addEventListener("click", removerDoWeakSet);
removerReferencia.addEventListener("click", removerReferenciaUsuario);
verificar.addEventListener("click", verificarUsuario);
