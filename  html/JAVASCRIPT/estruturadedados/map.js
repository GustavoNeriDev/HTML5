const id = document.getElementById("id");
const nome = document.getElementById("nome");
const cadastrar = document.getElementById("cadastrar");
const buscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");
//criando um map vazio para colocar informações
const usuarios = new Map();

function cadastrarUsuario() {
  const numeroId = Number(id.value);
  const nomeUsuario = nome.value.trim();

  if (id.value === "") {
    resultado.textContent = "Preencha o ID";
    return;
  }

  if (nomeUsuario === "") {
    resultado.textContent = "Preencha o nome";
    return;
  }
  //adicionando dados
  usuarios.set(numeroId, nomeUsuario);

  resultado.textContent = "Usuário cadastrado com sucesso!";
}

function buscarUsuario() {
  const numeroId = Number(id.value);

  if (id.value === "") {
    resultado.textContent = "Digite um ID";
    return;
  }
  //has verifica se ele existe
  if (usuarios.has(numeroId)) {
    //get pega p valor caso ele existir
    const usuario = usuarios.get(numeroId);

    resultado.textContent = `Usuário: ${usuario}`;
  } else {
    resultado.textContent = "Usuário não encontrado";
  }
}

cadastrar.addEventListener("click", cadastrarUsuario);
buscar.addEventListener("click", buscarUsuario);

/////// ATIVIDADE /////////

const id = document.getElementById("id");
const nome = document.getElementById("nome");
const cadastrar = document.getElementById("cadastrar");
const listar = document.getElementById("listar");
const resultado = document.getElementById("resultado");
//map vazio
const usuarios = new Map();

function cadastrarUsuario() {
  const nomeUser = nome.value.trim();
  const idUser = Number(id.value);
  if (id.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  if (nomeUser === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  //acionando dados
  usuarios.set(idUser, nomeUser);
  resultado.textContent = "Cadastrado com sucesso";
}

function listarUsuarios() {
  let texto = "";
  //percorrendo todos os valores
  usuarios.forEach((nome, id) => {
    texto += `
          id: ${id} <br>
          nome: ${nome}`;
  });
  resultado.innerHTML = texto;
}

cadastrar.addEventListener("click", cadastrarUsuario);
listar.addEventListener("click", listarUsuarios);

/////// ATIVIDADE APLICANDO DELETE -/////////

const id = document.getElementById("id");
const nome = document.getElementById("nome");
const cadastrar = document.getElementById("cadastrar");
const remover = document.getElementById("remover");
const listar = document.getElementById("listar");
const resultado = document.getElementById("resultado");

const usuarios = new Map();

function cadastrarUsuario() {
  const nomeUser = nome.value.trim();
  const idUser = Number(id.value);
  if (id.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  if (nomeUser === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  //acionando dados
  usuarios.set(idUser, nomeUser);
  resultado.textContent = "Cadastrado com sucesso";
}

function removerUsuario() {
  const idUser = Number(id.value);
  if (id.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  if (usuarios.has(idUser)) {
    const user = usuarios.delete(idUser);
    resultado.textContent = `Usuario removido ${user}`;
  } else {
    resultado.textContent = "Não encontrado";
  }
}

function listarUsuarios() {
  let texto = "";

  usuarios.forEach((nome, id) => {
    texto += `
       nome: ${nome} <br>
       id: ${id}`;
  });
  resultado.innerHTML = texto;
}

cadastrar.addEventListener("click", cadastrarUsuario);
remover.addEventListener("click", removerUsuario);
listar.addEventListener("click", listarUsuarios);
