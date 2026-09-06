const nome = document.getElementById("nome");
const idade = document.getElementById("idade");

const salvar = document.getElementById("salvar");
const mostrar = document.getElementById("mostrar");
const limpar = document.getElementById("limpar");

const resultado = document.getElementById("resultado");

function salvarUsuario() {
  if (nome.value === "" || idade.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");

  const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];

  const usuario = {
    nome: nome.value,
    idade: Number(idade.value),
  };

  usuarios.push(usuario);

  const dados = JSON.stringify(usuarios);

  localStorage.setItem("usuarios", dados);

  resultado.textContent = "Usuário salvo com sucesso!";

  nome.value = "";
  idade.value = "";
}

function mostrarUsuarios() {
  const dadosSalvos = localStorage.getItem("usuarios");

  if (!dadosSalvos) {
    resultado.textContent = "Nenhum usuário cadastrado";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  resultado.innerHTML = "";

  usuarios.forEach(({ nome, idade }) => {
    resultado.innerHTML += `
            Nome: ${nome}<br>
            Idade: ${idade}
            <hr>
        `;
  });
}

function limparUsuarios() {
  localStorage.removeItem("usuarios");

  resultado.textContent = "Dados removidos";
}

salvar.addEventListener("click", salvarUsuario);

mostrar.addEventListener("click", mostrarUsuarios);

limpar.addEventListener("click", limparUsuarios);

////ATIVIDADE///

const nome = document.getElementById("nome");
const valor = document.getElementById("valor");

const cadastrar = document.getElementById("cadastrar");
const depositar = document.getElementById("depositar");
const mostrar = document.getElementById("mostrar");

const resultado = document.getElementById("resultado");

function cadastrarUsuario() {
  if (nome.value === "" || valor.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");

  const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];

  const usuarioExistente = usuarios.find(({ nome: nomeUsuario }) => {
    return nomeUsuario === nome.value;
  });

  if (usuarioExistente) {
    resultado.textContent = "Usuário já cadastrado";
    return;
  }

  const usuario = {
    nome: nome.value,
    saldo: Number(valor.value),
  };

  usuarios.push(usuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  resultado.textContent = "Usuário cadastrado com sucesso!";
}

function depositarSaldo() {
  if (nome.value === "" || valor.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");

  if (!dadosSalvos) {
    resultado.textContent = "Nenhum usuário cadastrado";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  const usuario = usuarios.find(({ nome: nomeUsuario }) => {
    return nomeUsuario === nome.value;
  });

  if (!usuario) {
    resultado.textContent = "Usuário não encontrado";
    return;
  }

  usuario.saldo += Number(valor.value);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  resultado.textContent = "Depósito realizado com sucesso!";
}

function mostrarUsuarios() {
  const dadosSalvos = localStorage.getItem("usuarios");

  if (!dadosSalvos) {
    resultado.textContent = "Nenhum usuário cadastrado";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  resultado.innerHTML = "";

  usuarios.forEach(({ nome, saldo }) => {
    resultado.innerHTML += `
            Nome: ${nome}<br>
            Saldo: R$ ${saldo.toFixed(2)}
            <hr>
        `;
  });
}

cadastrar.addEventListener("click", cadastrarUsuario);

depositar.addEventListener("click", depositarSaldo);

mostrar.addEventListener("click", mostrarUsuarios);

//////TIVIDDADE/////

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const email = document.getElementById("email");

const cadastrar = document.getElementById("cadastrar");
const mostrar = document.getElementById("mostrar");
const atualizar = document.getElementById("atualizar");
const excluir = document.getElementById("excluir");

const resultado = document.getElementById("resultado");

function cadastrarUsuario() {
  if (nome.value === "" || idade.value === "" || email.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");

  const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];

  const usuario = {
    nome: nome.value,
    idade: Number(idade.value),
    email: email.value,
  };

  usuarios.push(usuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  resultado.textContent = "Usuário cadastrado!";
}

function mostrarUsuarios() {
  const dadosSalvos = localStorage.getItem("usuarios");

  if (!dadosSalvos) {
    resultado.textContent = "Nenhum usuário cadastrado";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  resultado.innerHTML = "";

  usuarios.forEach(({ nome, idade, email }) => {
    resultado.innerHTML += `
            Nome: ${nome}<br>
            Idade: ${idade}<br>
            Email: ${email}
            <hr>
        `;
  });
}

function atualizarUsuario() {
  if (nome.value === "" || idade.value === "" || email.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");

  if (!dadosSalvos) {
    resultado.textContent = "Nenhum usuário cadastrado";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  const usuario = usuarios.find(({ email: emailUsuario }) => {
    return emailUsuario === email.value;
  });

  if (!usuario) {
    resultado.textContent = "Usuário não encontrado";
    return;
  }

  usuario.nome = nome.value;
  usuario.idade = Number(idade.value);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  resultado.textContent = "Usuário atualizado!";
}

function excluirUsuario() {
  if (email.value === "") {
    resultado.textContent = "Informe o email";
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");

  if (!dadosSalvos) {
    resultado.textContent = "Nenhum usuário cadastrado";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  const usuariosAtualizados = usuarios.filter(({ email: emailUsuario }) => {
    return emailUsuario !== email.value;
  });

  if (usuariosAtualizados.length === usuarios.length) {
    resultado.textContent = "Usuário não encontrado";
    return;
  }

  localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));

  resultado.textContent = "Usuário excluído!";
}

cadastrar.addEventListener("click", cadastrarUsuario);

mostrar.addEventListener("click", mostrarUsuarios);

atualizar.addEventListener("click", atualizarUsuario);

excluir.addEventListener("click", excluirUsuario);

////ATIVIDADE//////

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const email = document.getElementById("email");

const cadastrar = document.getElementById("cadastrar");
const mostrar = document.getElementById("mostrar");
const atualizar = document.getElementById("atualizar");
const excluir = document.getElementById("excluir");

const resultado = document.getElementById("resultado");

function cadastrarUsuario() {
  if (nome.value === "" || idade.value === "" || email.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");

  const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];

  const maiorId = usuarios.reduce((maior, usuario) => {
    return usuario.id > maior ? usuario.id : maior;
  }, 0);

  const novoId = maiorId + 1;

  const usuario = {
    id: novoId,
    nome: nome.value,
    idade: Number(idade.value),
    email: email.value,
  };

  usuarios.push(usuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  resultado.textContent = "Usuário cadastrado com sucesso!";
}

function mostrarUsuarios() {
  const dadosSalvos = localStorage.getItem("usuarios");

  if (!dadosSalvos) {
    resultado.textContent = "Nenhum usuário cadastrado";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  resultado.innerHTML = "<h3>Usuários cadastrados</h3>";

  usuarios.forEach(({ id, nome, idade, email }) => {
    resultado.innerHTML += `
            ID: ${id}<br>
            Nome: ${nome}<br>
            Idade: ${idade}<br>
            Email: ${email}
            <hr>
        `;
  });
}

function atualizarUsuario() {
  if (nome.value === "" || idade.value === "" || email.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");

  if (!dadosSalvos) {
    resultado.textContent = "Nenhum usuário cadastrado";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  const usuario = usuarios.find(({ id }) => {
    return id === Number(email.value);
  });

  if (!usuario) {
    resultado.textContent = "Usuário não encontrado";
    return;
  }

  usuario.nome = nome.value;
  usuario.idade = Number(idade.value);
  usuario.email = email.value;

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  resultado.textContent = "Usuário atualizado com sucesso!";
}

function excluirUsuario() {
  if (email.value === "") {
    resultado.textContent = "Informe o email";
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");

  if (!dadosSalvos) {
    resultado.textContent = "Nenhum usuário cadastrado";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  const usuariosAtualizados = usuarios.filter(({ email: emailUsuario }) => {
    return emailUsuario !== email.value;
  });

  localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));

  resultado.textContent = "Usuário excluído com sucesso!";
}

cadastrar.addEventListener("click", cadastrarUsuario);

mostrar.addEventListener("click", mostrarUsuarios);

atualizar.addEventListener("click", atualizarUsuario);

excluir.addEventListener("click", excluirUsuario);
