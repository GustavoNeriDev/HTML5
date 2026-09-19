const nome = document.getElementById("nome");
const cadastrar = document.getElementById("cadastrar");
const listar = document.getElementById("listar");
const symbols = document.getElementById("symbols");
const resultado = document.getElementById("resultado");

const idUsuario = Symbol("id");

const usuario = {};

function cadastrarUsuario() {
  const userName = nome.value.trim();
  if (userName === "" || userName.length < 3 || userName.length > 120) {
    resultado.textContent = "Verifique os caracteres digitado";
    return;
  }
  //colocando o nome como propriedade do objeto
  usuario.nome = userName;
  //colocando um symbol no id
  usuario[idUsuario] = 123;
  resultado.textContent = "Cadastrado com sucesso";
}

function listarChaves() {
  //encontra as chave comuns "nome"
  const chaves = Object.keys(usuario);
  let texto = "";
  //verificando as chaves, como ele retorna array, deve ser verifcado com length
  if (chaves.length === 0) {
    resultado.textContent = "Não encontrado";
    return;
  }

  chaves.forEach(({ chaves }) => {
    texto += `
        chaves: ${chaves}`; //não ira aparecer o symbol
  });
  resultado.innerHTML = texto;
}

function listarSymbols() {
  //encontra a chave especifica symbol(id)
  const listaSymbols = Object.getOwnPropertySymbols(usuario);
  let texto = "";
  //verficando se exite symbol, como ele retorna  array, deve ser verificado com length
  if (listaSymbols.length === 0) {
    resultado.textContent = "Não encontrado";
  }
  //percorrendo os symbol

  listaSymbols.forEach(({ chaves }) => {
    texto += `
        chave: ${chaves}`;
  });
  resultado.innerHTML = texto;
}

cadastrar.addEventListener("click", cadastrarUsuario);
listar.addEventListener("click", listarChaves);
symbols.addEventListener("click", listarSymbols);

//// PROCURANDO O SYMBOL

const nome = document.getElementById("nome");
const cadastrar = document.getElementById("cadastrar");
const descobrir = document.getElementById("descobrir");
const acessar = document.getElementById("acessar");
const resultado = document.getElementById("resultado");

const idUsuario = Symbol("id");

const usuario = {};

function cadastrarUsuario() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Verifique os caracteres";
    return;
  }

  usuario.nome = nomeUser;
  usuario[idUsuario] = 123;
  resultado.textContent = "Usuario cadastrado com sucesso";
}

function descobrirSymbol() {
  //descobrindo o symbol
  const descoberto = Object.getOwnPropertySymbols(usuario);
  if (descoberto.length !== 0) {
    resultado.textContent = `encontrado ${descoberto.length}`;
  } else {
    resultado.textContent = "Não encontrado";
  }
}

function acessarId() {
  //prourando o symbol dentro do objeto usuario
  const achar = Object.getOwnPropertySymbols(usuario);

  //verificando se o symbol realmente existe
  if (achar.length === 0) {
    resultado.textContent = "Não encontrado";
  }
  //procurando o id
  const encontrado = usuario[achar[0]];
  //verificando se ele existe ou não dentro do objeto =
  if (encontrado !== undefined) {
    resultado.textContent = `encontrado com sucesso ${encontrado}`;
  } else {
    resultado.textContent = "Não encontrado";
  }
}

cadastrar.addEventListener("click", cadastrarUsuario);
descobrir.addEventListener("click", descobrirSymbol);
acessar.addEventListener("click", acessarId);

//três formas diferente de obter a propriedade do objeto

const nome = document.getElementById("nome");
const cadastrar = document.getElementById("cadastrar");
const chaves = document.getElementById("chaves");
const symbols = document.getElementById("symbols");
const todas = document.getElementById("todas");
const resultado = document.getElementById("resultado");

const idUsuario = Symbol("id");

const usuario = {};

function cadastrarUsuario() {
  const nomeUser = nome.value.trim();

  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 120) {
    resultado.textContent = "Verifique os caracteres";
    return;
  }

  usuario.nome = nomeUser;
  usuario.idade = 20;
  usuario[idUsuario] = 123;

  resultado.textContent = "Usuário cadastrado";
}

function mostrarChaves() {
  const mostrarPropriedades = Object.keys(usuario);

  if (mostrarPropriedades.length === 0) {
    resultado.textContent = "Não encontrado";
    return;
  }

  let texto = "";
  //perorrendo com forEach porque dentro está a  chave
  mostrarPropriedades.forEach((chave) => {
    texto += `${chave}<br>`;
  });

  resultado.innerHTML = texto;
}

function mostrarSymbols() {
  const encontrarPropriedades = Object.getOwnPropertySymbols(usuario);
  //o length === 0 tem que ser usado quando retornar as propriedades como array
  if (encontrarPropriedades.length === 0) {
    resultado.textContent = "Não encontrado";
    return;
  }

  resultado.textContent = `Quantidade de Symbols: ${encontrarPropriedades.length}`;
}

function mostrarTodas() {
  //mostra todas as chaves da propriedades
  const encontrarTodasPropriedades = Reflect.ownKeys(usuario);

  if (encontrarTodasPropriedades.length === 0) {
    resultado.textContent = "Não encontrado";
    return;
  }

  let texto = "";

  encontrarTodasPropriedades.forEach((chave) => {
    //usando a string porque cada elemento é uma chave e não um obj, então string(chave) é util porque uma  das chave pode não ser string
    texto += `Chave: ${String(chave)}<br>`;
  });

  resultado.innerHTML = texto;
}

cadastrar.addEventListener("click", cadastrarUsuario);
chaves.addEventListener("click", mostrarChaves);
symbols.addEventListener("click", mostrarSymbols);
todas.addEventListener("click", mostrarTodas);
